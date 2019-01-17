import React, { Component } from 'react';
import '../App.css';

class FeatureGrid extends Component {

    featureGrid() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">Emotions & Me</h1>
                <div className="w3-row-padding w3-center w3-margin-top">
                    <a href="/webcam">
                        <div className="w3-third">
                            <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                <h3>Webcam</h3>
                                <p>Short info about</p>
                                <p>what the Webcam</p>
                                <p>feature does</p>
                                <p>Icon for each feature?</p>
                            </div>
                        </div>
                    </a>
                    <a href="/videostreaming">
                        <div className="w3-third">
                            <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                <h3>Video Streaming</h3>
                                <p>Short info about</p>
                                <p>what the video streaming</p>
                                <p>feature does</p>
                                <p>Icon for each feature?</p>
                            </div>
                        </div>
                    </a>
                    <a href="/recordaudio">
                        <div className="w3-third">
                            <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                <h3>Record Audio</h3>
                                <p>Short info about</p>
                                <p>what the record audio</p>
                                <p>feature does</p>
                                <p>Icon for each feature?</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="w3-row-padding w3-center w3-margin-top">
                    <a href="/browse">
                        <div className="w3-third">
                            <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                <h3>Browse Photos & Audio</h3>
                                <p>Short info about</p>
                                <p>what the browse photos & audio</p>
                                <p>feature does</p>
                                <p>Icon for each feature?</p>
                            </div>
                        </div>
                    </a>
                    <a href="/assignmentcreator">
                        <div className="w3-third">
                            <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                <h3>Assignment Creator</h3>
                                <p>Short info about</p>
                                <p>what the assignment creator</p>
                                <p>feature does</p>
                                <p>Icon for each feature?</p>
                            </div>
                        </div>
                    </a>
                    <a href="/myassignments">
                        <div className="w3-third">
                            <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                <h3>My Assignments</h3>
                                <p>Short info about</p>
                                <p>what the my assignment</p>
                                <p>feature does</p>
                                <p>Icon for each feature?</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }

    render() {
        return (this.featureGrid());
    }
}

export default FeatureGrid;