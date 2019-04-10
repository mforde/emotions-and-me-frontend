import React, { Component } from 'react'
import AudioPlayer from 'react-playlist-player'
import emojis from "../../../constants/Emojis";
import Link from "react-router-dom/es/Link";

export  class angryAudioPlayer extends Component {
    state = {
        currentPlayList: {},
        songs: [
            {
                position: '1',
                songName: 'Very Angry - "I think I\'ve seen this before"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/100.wav'
            },
            {
                position: '2',
                songName: 'Somewhat Angry - "The airplane is almost full"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/10.wav'
            },
            {
                position: '3',
                songName: 'Very Angry - "It\'s 11 o\'clock"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1000.wav'
            },
            {
                position: '4',
                songName: 'Very Angry - "We\'ll stop in a couple of minutes"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/104.wav'
            },
            {
                position: '5',
                songName: 'Somewhat Angry - "I wonder what this is about"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1005.wav'
            },
            {
                position: '6',
                songName: 'Somewhat Angry - "I think I\'vs seen this before"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1006.wav'
            },
            {
                position: '7',
                songName: 'Somewhat Angry - "We\'ll stop in a couple of minutes"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1007.wav'
            },
            {
                position: '8',
                songName: 'Somewhat Angry - "The surface is slick"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1008.wav'
            },
            {
                position: '9',
                songName: 'Very Angry - "Don\'t forget a jacket"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1009.wav'
            },
            {
                position: '10',
                songName: 'A Little Angry - "I think I have a doctor\'s appointment"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1010.wav'
            },
            {
                position: '11',
                songName: 'Somewhat Angry - "It\'s 11 o\'clock"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1011.wav'
            },
            {
                position: '12',
                songName: 'Very Angry - "The airplane is almost full"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1012.wav'
            },
            {
                position: '13',
                songName: 'A Little Angry - "We\'ll stop in a couple of minutes"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1013.wav'
            },
            {
                position: '14',
                songName: 'Extremely Angry - "It\'s 11 o\'clock"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1014.wav'
            },
            {
                position: '15',
                songName: 'Somewhat Angry - "I think I have a doctor\'s appointment"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1015.wav'
            },
            {
                position: '16',
                songName: 'Somewhat Angry - "I\'m on my way to the meeting"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1016.wav'
            },
            {
                position: '17',
                songName: 'A Little Angry - "I wonder what this is about"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1017.wav'
            },
            {
                position: '18',
                songName: 'Somewhat Angry - "Don\'t forget a jacket"',
                songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/ANGRY/1018.wav'
            }
        ]
    };

    loadPlayList = () =>
        this.setState({
            currentPlayList: {
                playlistCoverUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/ANGRY/1.jpeg',
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
                    <img className="w3-image w3-margin-right" src={emojis.angry} alt="angry" style={{width: '8%'}}/>
                    Angry Audio Clips
                    <img className="w3-image w3-margin-left" src={emojis.angry} alt="angry" style={{width: '8%'}}/>
                </h1>
                <div className="audio-clips w3-center">
                    <div className="play-all w3-margin">
                        <button className="w3-button w3-theme w3-padding-large" onClick={this.loadPlayList}>
                            Play All
                        </button>
                        <AudioPlayer currentPlayList={this.state.currentPlayList}
                                     onToggle={({audioPlaying}) => console.log({audioPlaying})}
                                     style={{paddingBottom: "100px"}}
                        />
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
