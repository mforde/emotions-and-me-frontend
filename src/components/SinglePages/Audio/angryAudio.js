import React, { Component } from 'react'
import AudioPlayer from 'react-playlist-player'

export  class angryAudioPlayer extends Component {
  state = {
    currentPlayList: {}
  }

  loadPlayList = () =>
    this.setState({
      currentPlayList: {
        playlistCoverUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/ANGRY/1.jpeg',
        playlistName: 'Angry Playlist',
        songs: [
          {
            position: '1',
            songName: '1',
            songUrl: 'https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Audio/SAD/1.wav'
          },
          {
            position: '2',
            songName: '2',
            songUrl: '"https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/BrowseAP/Angry/audio/1001_DFA_ANG_XX.wav"'
          },
          {
            position: '3',
            songName: '3',
            songUrl: '"https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/BrowseAP/Angry/audio/1001_DFA_ANG_XX.wav"'
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
