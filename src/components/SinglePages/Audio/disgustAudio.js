import React, { Component } from 'react'
import AudioPlayer from 'react-playlist-player'

export  class disgustAudioPlayer extends Component {
  state = {
    currentPlayList: {}
  }

  loadPlayList = () =>
    this.setState({
      currentPlayList: {
        playlistCoverUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/DISGUST/1.jpeg',
        playlistName: 'Disgust Playlist',
        songs: [
          {
            position: '1',
            songName: '1',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/0.wav'
          },
          {
            position: '2',
            songName: '2',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/10.wav'
          },
          {
            position: '3',
            songName: '3',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1000.wav'
          },
          {
            position: '4',
            songName: '4',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/104.wav'
          },
          {
            position: '5',
            songName: '5',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1005.wav'
          },
          {
            position: '6',
            songName: '6',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1006.wav'
          },
          {
            position: '7',
            songName: '7',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1007.wav'
          },
          {
            position: '8',
            songName: '8',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1008.wav'
          },
          {
            position: '9',
            songName: '9',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1009.wav'
          },
          {
            position: '10',
            songName: '10',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1010.wav'
          },
          {
            position: '11',
            songName: '11',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1011.wav'
          },
          {
            position: '12',
            songName: '12',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1012.wav'
          },
          {
            position: '13',
            songName: '13',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1013.wav'
          },
          {
            position: '14',
            songName: '14',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1014.wav'
          },
          {
            position: '15',
            songName: '15',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1015.wav'
          },
          {
            position: '16',
            songName: '16',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1016.wav'
          },
          {
            position: '17',
            songName: '17',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1017.wav'
          },
          {
            position: '18',
            songName: '18',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/DISGUST/1018.wav'
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
