import React from 'react';
import BaseUrl from '../constants/BaseUrl';
import '../App.css';
import emojis from "../constants/Emojis";

const audioType = 'audio/wav';

Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
if(!Date.now) Date.now = function() { return new Date(); }
Date.time = function() { return Date.now().getUnixTime(); }

class RecordAudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recording: false,
            audios: [],
            result: ""
        };
    }

    async componentDidMount() {
        const stream = await navigator.mediaDevices.getUserMedia({audio: true});
        // show it to user
        try {
            this.srcObject = stream;
        } catch (error) {
            this.src = window.URL.createObjectURL(stream);
        }
        this.audio.play();
        // init recording
        this.mediaRecorder = new MediaRecorder(stream);
        // init data storage for video chunks
        this.chunks = [];
        // listen for data from media recorder
        this.mediaRecorder.ondataavailable = e => {
            if (e.data && e.data.size > 0) {
                this.chunks.push(e.data);
            }
        };
    }

    startRecording(e) {
        e.preventDefault();
        // wipe old data chunks
        this.chunks = [];
        // start recorder with 10ms buffer
        this.mediaRecorder.start(10);
        // say that we're recording
        this.setState({recording: true});
    }

    //record 3.5 seconds of audio
    stopRecording(e) {
        e.preventDefault();
        // stop the recorder
        this.mediaRecorder.stop();

        // say that we're not recording
        this.setState({recording: false});
        // send audio to backend
        this.saveAudio();
    }

  saveAudio() {
    // convert saved chunks to blob
    var myblob = new Blob(this.chunks, {type: audioType});
    // send audio blob to backend
    let adata = new FormData();
    adata.append('file', myblob, 'audio' + new Date().getUnixTime() +'.wav')

        fetch(BaseUrl + 'audio_emotions', {
            method: "POST",
            body: adata,
            data: adata,
        }).then(response => response.json().then(function (data) {
            console.log(data);
            let test_arr = data;
            let maxConf = 0;
            let emot = "";
            for (let k = 0; k < 8; k++) {
                // console.log(test_arr[k][0]);
                // console.log(test_arr[k][1]);
                let conf = test_arr[k][1];
                if (conf > maxConf) {
                    maxConf = conf;
                    emot = data[k][0]
                }
            }

            let resultStr = emot;
            if (maxConf > 0.30) {
                this.setState({result: resultStr + " " + maxConf})
            } else {
                this.setState({result: 'not enough data was given, please record again'})
            }


        }.bind(this)));


        const audioURL = window.URL.createObjectURL(myblob);
        // append videoURL to list of saved videos for rendering
        const audios = this.state.audios.concat([audioURL]);
        this.setState({audios});
    }

    deleteAudio(audioURL) {
        // filter out current videoURL from the list of saved videos
        const audios = this.state.audios.filter(a => a !== audioURL);
        this.setState({audios});
        this.setState({result: 'emotion'})
    }

    getEmoji = (emotion) => {
        switch (emotion) {
            case "happy":
                return (
                    <div className="emotion w3-center">
                        <img className="w3-image w3-margin" src={emojis.happy} alt={"happy"} style={{width: '35%'}}/>
                        <h3 className="w3-margin">HAPPY</h3>
                    </div>
                );
            case "sad":
                return (
                    <div className="emotion w3-center">
                        <img className="w3-image w3-margin" src={emojis.sad} alt={"sad"} style={{width: '35%'}}/>
                        <h3 className="w3-margin">SAD</h3>
                    </div>
                );
            case "angry":
                return (
                    <div className="emotion w3-center">
                        <img className="w3-image w3-margin" src={emojis.angry} alt={"angry"} style={{width: '35%'}}/>
                        <h3 className="w3-margin">ANGRY</h3>
                    </div>
                );
            case "surprised":
                return (
                    <div className="emotion w3-center">
                        <img className="w3-image w3-margin" src={emojis.surprise} alt={"surprise"}
                             style={{width: '35%'}}/>
                        <h3 className="w3-margin">SURPRISE</h3>
                    </div>
                );
            case "fearful":
                return (
                    <div className="emotion w3-center">
                        <img className="w3-image w3-margin" src={emojis.fear} alt={"fear"} style={{width: '35%'}}/>
                        <h3 className="w3-margin">FEAR</h3>
                    </div>
                );
            case "disgust":
                return (
                    <div className="emotion w3-center">
                        <img className="w3-image w3-margin" src={emojis.disgust} alt={"disgust"}
                             style={{width: '35%'}}/>
                        <h3 className="w3-margin">DISGUST</h3>
                    </div>
                );
            case "calm":
                return (
                    <div className="emotion w3-center">
                        <img className="w3-image w3-margin" src={emojis.calm} alt={"calm"} style={{width: '35%'}}/>
                        <h3 className="w3-margin">CALM</h3>
                    </div>
                );
            case "neutral":
                return (
                    <div className="emotion w3-center">
                        <img className="w3-image w3-margin" src={emojis.neutral} alt={"neutral"} style={{width: '35%'}}/>
                        <h3 className="w3-margin">NEUTRAL</h3>
                    </div>
                );
            default:
                return (
                    <div className={"emotion"}/>
                );
        }
    };

    render() {
        const {recording, audios} = this.state;

        return (
            <div className="w3-container w3-center">
                <h1 className="w3-center">Emotions in Your Voice</h1>
                <audio
                    style={{width: 400}}
                    ref={a => {
                        this.audio = a;
                    }}>
                    <p>Audio stream not available. </p>
                </audio>
                <div>
                    <div>
                        {!recording && <button className="w3-button w3-theme w3-padding w3-margin"
                                               onClick={e => this.startRecording(e)}>Record</button>}
                        {recording &&
                        <button className="w3-button w3-theme w3-padding w3-margin"
                                onClick={e => this.stopRecording(e)}>Stop</button>}
                    </div>
                    <div className="w3-half w3-left">
                        <div>
                            <h3>Recorded Audios:</h3>
                            {audios.map((audioURL, i) => (
                                <div key={`audio_${i}`} className="w3-margin">
                                    <audio controls style={{width: 200}} src={audioURL} className="w3-left"/>
                                    <button className="w3-button w3-hover-red w3-margin-left margin-small"
                                            onClick={() => this.deleteAudio(audioURL)}>Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w3-half w3-right">
                        {this.getEmoji(this.state.result)}
                    </div>
                </div>
            </div>
        );
    }
}

export default RecordAudio