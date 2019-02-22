import React, { Component } from 'react';
import '../App.css';

class HowToPage extends Component {

    onClickWebcam = e => {
        e.preventDefault();
        document.getElementById("webcam").classList.toggle("w3-show");
    };
    onClickVideo = e => {
        e.preventDefault();
        document.getElementById("video").classList.toggle("w3-show");
    };
    onClickAudio = e => {
        e.preventDefault();
        document.getElementById("audio").classList.toggle("w3-show");
    };
    onClickBrowse = e => {
        e.preventDefault();
        document.getElementById("browse").classList.toggle("w3-show");
    };
    onClickCreator = e => {
        e.preventDefault();
        document.getElementById("creator").classList.toggle("w3-show");
    };
    onClickAssignments = e => {
        e.preventDefault();
        document.getElementById("assignments").classList.toggle("w3-show");
    };

    howTo() {
        return (
            <div className="w3-container">
                <h1>How To Use This Site</h1>
                <p>
                    Emotions & me is a website for learning about emotions. By using the features
                    on this site, you can learn about how to express and understand emotions. Click
                    on the links below to read more about how to use each feature.
                </p>
                <h3 className="w3-padding-top">Features</h3>
                <div className="w3-container">
                    <button onClick={this.onClickWebcam} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Webcam</button>
                    <div id="webcam" className="w3-hide">
                        <p>How to for the webcam</p>
                    </div>
                    <button onClick={this.onClickVideo} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Video Streaming</button>
                    <div id="video" className="w3-hide">
                        <p>How to for the video streaming</p>
                    </div>
                    <button onClick={this.onClickAudio} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Record Audio</button>
                    <div id="audio" className="w3-hide">
                        <p>How to for the record audio</p>
                    </div>
                    <button onClick={this.onClickBrowse} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Browse Photos & Audio</button>
                    <div id="browse" className="w3-hide">
                        <p>How to for the browse photos & audio</p>
                    </div>
                    <button onClick={this.onClickCreator} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">Assignment Creator</button>
                    <div id="creator" className="w3-hide">
                        <p>How to for the assignment creator</p>
                    </div>
                    <button onClick={this.onClickAssignments} className="w3-padding-16 w3-theme w3-button w3-block w3-left-align">My Assignments</button>
                    <div id="assignments" className="w3-hide">
                        <p>How to for the my assignment</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (this.howTo());
    }
}

export default HowToPage;