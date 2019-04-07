import React, { Component } from 'react'
import AudioPlayer from 'react-playlist-player'
import emojis from "../../../constants/Emojis";

export  class fearAudioPlayer extends Component {
    state = {
        currentPlayList: {},
        songs: [
            {
                position: '1',
                songName: 'Somewhat Fearful - "The airplane is almost full"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/100.wav'
            },
            {
                position: '2',
                songName: 'Somewhat Fearful - "I think I\'ve seen this before"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/10.wav'
            },
            {
                position: '3',
                songName: 'A Little Fearful - "Maybe tomorrow it will be cold"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1000.wav'
            },
            {
                position: '4',
                songName: 'Very Fearful - "Don\'t forget a jacket"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/104.wav'
            },
            {
                position: '5',
                songName: 'A Little Fearful - "That is exactly what happened"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1005.wav'
            },
            {
                position: '6',
                songName: 'A Little Fearful - "It\'s 11 o\'clock"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1006.wav'
            },
            {
                position: '7',
                songName: 'Somewhat Fearful - "I wonder what this is about"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1007.wav'
            },
            {
                position: '8',
                songName: 'A Little Fearful - "I think I have a doctor\'s appointment"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1008.wav'
            },
            {
                position: '9',
                songName: 'Very Fearful - "It\'s 11 o\'clock"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1009.wav'
            },
            {
                position: '10',
                songName: 'Somewhat Fearful - "Maybe tomorrow it will be cold"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1010.wav'
            },
            {
                position: '11',
                songName: 'Somewhat Fearful - "Don\'t forget a jacket"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1011.wav'
            },
            {
                position: '12',
                songName: 'A Little Fearful - "Don\'t forget a jacket"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1012.wav'
            },
            {
                position: '13',
                songName: 'Somewhat Fearful - "It\'s 11 o\'clock"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1013.wav'
            },
            {
                position: '14',
                songName: 'Very Fearful - "I would like a new alarm clock"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1014.wav'
            },
            {
                position: '15',
                songName: 'Somewhat Fearful - "That is exactly what happened"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1015.wav'
            },
            {
                position: '16',
                songName: 'Very Fearful - "That is exactly what happened"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1016.wav'
            },
            {
                position: '17',
                songName: 'Very Fearful - "I wonder what this is about"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/FEAR/1017.wav'
            }
        ],
    };

    loadPlayList = () =>
        this.setState({
            currentPlayList: {
                playlistCoverUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/ANGRY/1.jpeg',
                playlistName: 'FEAR Playlist',
                songs: this.state.songs,
                type: 'album'
            }
        });

    render() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">
                    <img className="w3-image w3-margin-right" src={emojis.fear} alt="fear" style={{width: '8%'}}/>
                    Fear Audio Clips
                    <img className="w3-image w3-margin-left" src={emojis.fear} alt="fear" style={{width: '8%'}}/>
                </h1>
                <div className="audio-clips w3-center">
                    <div className="play-all w3-margin">
                        <button className="w3-button w3-theme w3-padding-large" onClick={this.loadPlayList}>
                            Play All
                        </button>
                        <AudioPlayer currentPlayList={this.state.currentPlayList}
                                     onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
                    </div>
                    {this.state.songs.map((song, i) => {
                        return (
                            <div className="songs w3-margin" key={i}>
                                <div className="w3-center">
                                    <label className="w3-padding">{song.songName}</label>
                                    <div>
                                        <audio controls>
                                            <source src={song.songUrl} type="audio/wav" id={song.songName}/>
                                            Your browser does not support the audio element.
                                        </audio>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
