import React from 'react';

export default class AudioPlayer extends React.Component {
  render() {
        return (
        <div>
          <audio controls>
            {/* Insert music options here */}
            {/* <source /> */}
          </audio>
      </div>
    )
  }
}