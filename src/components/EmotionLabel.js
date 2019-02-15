import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Emotions from '../constants/Emotions.js';
import '../App.css';

class EmotionLabel extends Component {
  static propTypes = {
    emotion: PropTypes.string.isRequired, 
  }
  
  constructor(props){
    super(props);
    let color;
    switch(props.emotion) {
      case Emotions.ANGRY:
        color = "w3-red";
        break;
      case Emotions.DISGUST:
        color = "w3-brown";
        break;
      case Emotions.FEAR:
        color = "w3-black";
        break;
      case Emotions.HAPPY:
        color = "w3-green";
        break;
      case Emotions.SAD:
        color = "w3-blue";
        break;
      case Emotions.SURPRISE:
        color = "w3-purple";
        break;
      default:
        color = "w3-grey";
        break;
    }
    this.state = {
      color,
    }
  }


  render() {
    const emotionLowerCase = this.props.emotion.toLowerCase();
    const emotion = emotionLowerCase.charAt(0).toUpperCase() + emotionLowerCase.substr(1);

    return (
      <span className={`w3-tag ${this.state.color}`}>&nbsp;{emotion}&nbsp;</span>
    )
  }
}

export default EmotionLabel;