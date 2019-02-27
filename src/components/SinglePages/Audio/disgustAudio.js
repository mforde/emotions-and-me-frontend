import React from 'react';

export  class disgustAudioPlayer extends React.Component {
  render() {
        return (
        <div>
          <audio controls>
              <source src="https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/BrowseAP/Angry/audio/1001_DFA_ANG_XX.wav"  type="audio/mpeg"/>
          </audio>
      </div>
    )
  }
}