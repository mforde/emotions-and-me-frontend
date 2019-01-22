import React from 'react';
import MusicPlayer from 'react-responsive-music-player'

const playlist = [
  {
    url: 'path/to/mp3',
    cover: 'path/to/jpg',
    title: 'Despacito',
    artist: [
      'Luis Fonsi',
      'Daddy Yankee'
    ]
  },
  {
    url: 'path/to/mp3',
    cover: 'path/to/jpg',
    title: 'Bedtime Stories',
    artist: [
      'Jay Chou'
    ]
  }
]

export default class AudioPlayer extends React.Component {
    render() {
        return (
        <div>
        <MusicPlayer playlist={playlist} />
      </div>
    )
    }
}