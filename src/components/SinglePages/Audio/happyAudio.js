import React, { Component } from 'react'
import AudioPlayer from 'react-playlist-player'
import emojis from "../../../constants/Emojis";
import Link from "react-router-dom/es/Link";

export  class happyAudioPlayer extends Component {
    state = {
        currentPlayList: {},
        songs: [
            {
                position: '1',
                songName: 'A Little Happy - "Don\'t forget a jacket"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/HAPPY/1.wav'
            },
            {
                position: '2',
                songName: 'Somewhat Happy - "I\'m on my way to the meeting"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/HAPPY/2.wav'
            },
            {
                position: '3',
                songName: 'Somewhat Happy - "The airplane is almost full"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/HAPPY/7.wav'
            },
            {
                position: '4',
                songName: 'Very Happy - "I would like a new alarm clock"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/HAPPY/4.wav'
            },
            {
                position: '5',
                songName: 'Somewhat Happy - "That is exactly what happened"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/HAPPY/5.wav'
            },
            {
                position: '6',
                songName: 'Somewhat Happy - "Don\'t forget a jacket"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/HAPPY/6.wav'
            },
        ],
    };

    loadPlayList = () =>
        this.setState({
            currentPlayList: {
                playlistCoverUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/HAPPY/9.jpeg',
                playlistName: 'HAPPY Playlist',
                songs: this.state.songs,
                type: 'album'
            }
        });

    returnToTasklist = () => {
        if (this.props.location.state !== undefined) {
            if (this.props.location.state.isTLTask === true) {
                return (
                    <div className="w3-display-container">
                        <Link to={{
                            pathname: '/tasklistpage',
                            state: {
                                tasklistName: this.props.location.state.tasklistName,
                                tasklistData: this.props.location.state.tasklistData
                            }
                        }} style={{textDecoration: 'none'}}>
                            <button className="w3-button w3-theme w3-display-right w3-margin-bottom">
                                Return to Tasklist <i className="arrow right"/>
                            </button>
                        </Link>
                    </div>
                )
            }
        }
        return <div className="w3-display-container"/>
    };

    render() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">
                    <img className="w3-image w3-margin-right" src={emojis.happy} alt="happy" style={{width: '8%'}}/>
                    Happy Audio Clips
                    <img className="w3-image w3-margin-left" src={emojis.happy} alt="happy" style={{width: '8%'}}/>
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
                <div className="w3-display-container">
                    <a href="/audiolist">
                        <button className="w3-button w3-theme w3-display-left w3-margin-bottom">
                            <i className="arrow left"/> Back
                        </button>
                    </a>
                </div>
                {this.returnToTasklist()}
            </div>
        )
    }
}
