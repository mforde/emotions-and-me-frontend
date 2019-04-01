import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class AudioList extends Component {

    constructor(props) {
        super(props);

        this.nameArr = ['Happy', 'Confused', 'Fear', 'Neutral', 'Angry', 'Disgust'];
    }

    getEmotion() {
        // This creates a JSX element for every name in the list.
        return this.nameArr.map(name =>
            <div className="w3-theme w3-card w3-padding w3-hover-shadow w3-hover-light-gray w3-margin">
                <Link to={"/audio/" + String(name)} style={{textDecoration: 'none'}}>
                    <h3 className="w3-center">{name}</h3>
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">Emotions in Voices</h1>
                <div className="browse w3-centered w3-container w3-margin">
                    {this.getEmotion()}
                </div>
            </div>
        );
    }
}