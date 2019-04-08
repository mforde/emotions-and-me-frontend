import React, { Component } from 'react'
import AudioPlayer from 'react-playlist-player'
import emojis from "../../../constants/Emojis";
import Link from "react-router-dom/es/Link";

export  class neutralAudioPlayer extends Component {
    state = {
        currentPlayList: {},
        songs: [
            {
                position: '1',
                songName: 'Neutral - "It\'s 11 o\'clock"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/NEUTRAL/1.wav'
            },
            {
                position: '2',
                songName: 'Neutral - "We\'ll stop in a couple of minutes"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/NEUTRAL/2.wav'
            },
            {
                position: '3',
                songName: 'Neutral - "The surface is slick"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/NEUTRAL/3.wav'
            },
            {
                position: '4',
                songName: 'Neutral - "I think I\'ve seen this before"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/NEUTRAL/4.wav'
            },
            {
                position: '5',
                songName: 'Neutral - "Maybe tomorrow it will be cold"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/NEUTRAL/6.wav'
            }
        ]
    };

    loadPlayList = () =>
        this.setState({
            currentPlayList: {
                playlistCoverUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/NEUTRAL/4.jpeg',
                playlistName: 'Angry Playlist',
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
                    <img className="w3-image w3-margin-right" src={emojis.neutral} alt="neutral" style={{width: '8%'}}/>
                    Neutral Audio Clips
                    <img className="w3-image w3-margin-left" src={emojis.neutral} alt="neutral" style={{width: '8%'}}/>
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
