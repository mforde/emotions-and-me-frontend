import React, { Component } from 'react'
import AudioPlayer from 'react-playlist-player'

export  class neutralAudioPlayer extends Component {
  state = {
    currentPlayList: {}
  }

  loadPlayList = () =>
    this.setState({
      currentPlayList: {
        playlistCoverUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/NEUTRAL/4.jpeg',
        playlistName: 'Angry Playlist',
        songs: [
          {
            position: '1',
            songName: '1',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/NEUTRAL/1.wav'
          },
          {
            position: '2',
            songName: '2',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/NEUTRAL/2.wav'
          },
          {
            position: '3',
            songName: '3',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/NEUTRAL/3.wav'
          },
          {
            position: '4',
            songName: '4',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/NEUTRAL/4.wav'
          },
          {
            position: '5',
            songName: '5',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/NEUTRAL/5.wav'
          },
          {
            position: '6',
            songName: '6',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/NEUTRAL/6.wav'
          },{
            position: '6',
            songName: '6',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/NEUTRAL/7.wav'
          }

        ],
        type: 'album'
      }
    })

    render() {
      return (
        <div className={'Demo'}>
          <button className={'Demo__load-btn'} onClick={this.loadPlayList}>
            load playlist
          </button>
          <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
        </div>
    )
  }
}
