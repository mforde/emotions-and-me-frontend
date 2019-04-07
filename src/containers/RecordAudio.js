import React from 'react';
import BaseUrl from '../constants/BaseUrl';
//const audioType = 'audio/*';
const audioType = 'audio/wav';

class RecordAudio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      audios: [],
      result: "emotion"
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
    adata.append('file', myblob, 'audio' + new Date() +'.wav')

    fetch(BaseUrl + 'audio_emotions', {
      method: "POST",
      body: adata,
      data: adata,
    }).then(response => response.json().then(function(data) {
      console.log(data)
      var test_arr = data;
      var maxConf = 0
      var emot = ""
      for (var k = 0; k < 8; k++)
      {
        // console.log(test_arr[k][0]);
        // console.log(test_arr[k][1]);
        let conf = test_arr[k][1]
        if (conf > maxConf) {
          maxConf = conf
          emot = data[k][0]
        }
      }

      var resultStr = emot;
      if(maxConf > 0.30){
        this.setState({result: resultStr + " " + maxConf})
      }
      else
      {
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

  render() {
    const {recording, audios} = this.state;

    return (
      <div className="camera" class="middle_align">
        <audio


          style={{width: 400}}
          ref={a => {
            this.audio = a;
          }}>
         <p>Audio stream not available. </p>
        </audio>
        <div>
          {!recording && <button onClick={e => this.startRecording(e)}>Record</button>}
          {recording && <button onClick={e => this.stopRecording(e)}>Stop</button>}
        </div>
        <div>
          <h3>Recorded audios:</h3>
          {audios.map((audioURL, i) => (
            <div key={`audio_${i}`}>
              <audio controls style={{width: 200}} src={audioURL}   />
              <div>
                <button onClick={() => this.deleteAudio(audioURL)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <p>{this.state.result}</p>
      </div>
    );
  }
}
export default RecordAudio