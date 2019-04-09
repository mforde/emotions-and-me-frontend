import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import emojis from "../constants/Emojis";

export default class PictureList extends Component {

    constructor(props) {
        super(props);

        this.nameArr = ['Happy', 'Confused', 'Fear', 'Neutral', 'Angry', 'Disgust'];
        this.emojis = [emojis.happy, emojis.confused, emojis.fear, emojis.neutral, emojis.angry, emojis.disgust]
    }

    getEmotion() {
        // This creates a JSX element for every name in the list.
        return this.nameArr.map((name, i) =>
            <div className="w3-theme w3-card w3-padding w3-hover-shadow w3-hover-light-gray w3-margin" key={name}>
                <Link to={"/picture/" + String(name)} style={{textDecoration: 'none'}}>
                    <h3 className="w3-center w3-show-inline-block">
                        <img className="w3-image w3-margin-right" src={this.emojis[i]} alt={name}
                             style={{width: '8%'}}/>
                        {name}
                        <img className="w3-image w3-margin-left" src={this.emojis[i]} alt={name} style={{width: '8%'}}/>
                    </h3>
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">Emotions in Faces</h1>
                <div className="browse w3-centered w3-container w3-margin">
                    {this.getEmotion()}
                </div>
                <div className="w3-display-container">
                    <a href="/browse">
                        <button className="w3-button w3-theme w3-display-left w3-margin-bottom">
                            <i className="arrow left"/> Back
                        </button>
                    </a>
                </div>
            </div>
        );
    }
}