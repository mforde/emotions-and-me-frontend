import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux";

class FeatureGrid extends Component {
    featureGrid() {
        if (this.props.receivedUser) {
            if (this.props.user.type === 'TEACHER') {
                return (
                    <div className="w3-container">
                        <h1 className="w3-center">Emotions & Me</h1>
                        <div className="w3-row-padding w3-center w3-margin-top">
                            <a href="/webcam">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-white">
                                        <h3>Emotions on Your Face</h3>
                                        <p className="w3-padding-top">Using your webcam, we will tell you</p>
                                        <p>what emotion you are expressing</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/videostreaming">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-white">
                                        <h3>Emotions on Their Faces</h3>
                                        <p className="w3-padding-top">Choose a youtube video and we will tell you</p>
                                        <p>what emotions the people in the video are expressing</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/recordaudio">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-white">
                                        <h3>Emotions in Your Voice</h3>
                                        <p className="w3-padding-top">Record yourself and we will tell you</p>
                                        <p>what emotion you are expressing with your voice</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="w3-row-padding w3-center w3-margin-top">
                            <a href="/browse">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-white">
                                        <h3>Emotions in Photos & Audio</h3>
                                        <p className="w3-padding-top">Look through photos and audio clips of</p>
                                        <p>people expressing all different kinds of emotions</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/assignmentcreator">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-white">
                                        <h3>Assignment Creator</h3>
                                        <p className="w3-padding-top">Create quizzes and tasklists and send them</p>
                                        <p>to your students to practice understanding emotions</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/myassignments">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-white">
                                        <h3>My Assignments</h3>
                                        <p className="w3-padding-top">Here's a list of assignments that</p>
                                        <p>your teacher has created and sent to you</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="w3-container">
                        <h1 className="w3-center">Emotions & Me</h1>
                        <div className="w3-row-padding w3-center w3-margin-top">
                            <a href="/webcam">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                        <h3>Emotions on Your Face</h3>
                                        <p className="w3-padding-top">Using your webcam, we will tell you</p>
                                        <p>what emotion you are expressing</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/videostreaming">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                        <h3>Emotions on Their Faces</h3>
                                        <p className="w3-padding-top">Choose a youtube video and we will tell you</p>
                                        <p>what emotions the people in the video are expressing</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/recordaudio">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                        <h3>Emotions in Your Voice</h3>
                                        <p className="w3-padding-top">Record yourself and we will tell you</p>
                                        <p>what emotion you are expressing with your voice</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="w3-row-padding w3-center w3-margin-top">
                            <a href="/browse">
                                <div style={{width: '33.33333%'}} className="w3-show-inline-block">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                        <h3>Emotions in Photos & Audio</h3>
                                        <p className="w3-padding-top">Look through photos and audio clips of</p>
                                        <p>people expressing all different kinds of emotions</p>
                                    </div>
                                </div>
                            </a>
                            <a href="/myassignments">
                                <div style={{width: '33.33333%'}} className="w3-show-inline-block">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                        <h3>My Assignments</h3>
                                        <p className="w3-padding-top">Here's a list of assignments that</p>
                                        <p>your teacher has created and sent to you</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                )
            }
        }
        else {
            return (
                <div className="w3-container">
                    <h1 className="w3-center">Emotions & Me</h1>
                    <div className="w3-row-padding w3-center w3-margin-top">
                        Loading Features...
                    </div>
                </div>
            )
        }
    }

    render() {
        return (this.featureGrid());
    }
}

const mapStateToProps = state => {
    return {
        user: state.userInfo.user,
        userRequestStatus: state.userInfo.currentUserRequestStatus,
        receivedUser: state.userInfo.receivedUser,
    }
};

export default connect(mapStateToProps, null) (FeatureGrid);