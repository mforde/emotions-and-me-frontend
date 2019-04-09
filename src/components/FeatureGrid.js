import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux";
import featureIcons from "../constants/featureIcons";

class FeatureGrid extends Component {
    featureGrid() {
        if (this.props.receivedUser) {
            if (this.props.user.type === 'TEACHER') {
                return (
                    <div className="w3-container">
                        <h1 className="w3-center">Emotions & Me</h1>
                        <div className="w3-row-padding w3-center w3-margin-top">
                            <a href="/myassignments">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-white">
                                        <h3>My Assignments</h3>
                                        <img
                                            className="w3-image w3-margin w3-padding-top"
                                            src={featureIcons.assignments}
                                            alt={"assignments"}
                                            style={{width: '35%'}}
                                        />
                                    </div>
                                </div>
                            </a>
                            <a href="/assignmentcreator">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-white">
                                        <h3>Assignment Creator</h3>
                                        <img
                                            className="w3-image w3-margin w3-padding-top"
                                            src={featureIcons.assignmentcreator}
                                            alt={"assignment-creator"}
                                            style={{width: '35%'}}
                                        />
                                    </div>
                                </div>
                            </a>
                            <a href="/browse">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-white">
                                        <h3>Emotions in Photos & Audio</h3>
                                        <img
                                            className="w3-image w3-margin w3-padding-top"
                                            src={featureIcons.photos}
                                            alt={"photos"}
                                            style={{width: '35%'}}
                                        />
                                        <img
                                            className="w3-image w3-margin w3-padding-top"
                                            src={featureIcons.audio}
                                            alt={"audio"}
                                            style={{width: '35%'}}
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="w3-row-padding w3-center w3-margin-top">
                            <a href="/webcam">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-white">
                                        <h3>Emotions on Your Face</h3>
                                        <img
                                            className="w3-image w3-margin w3-padding-top"
                                            src={featureIcons.webcam}
                                            alt={"webcam"}
                                            style={{width: '35%'}}
                                        />
                                    </div>
                                </div>
                            </a>
                            <a href="/videostreaming">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-white">
                                        <h3>Emotions on Their Faces</h3>
                                        <img
                                            className="w3-image w3-margin w3-padding-top"
                                            src={featureIcons.videostreaming}
                                            alt={"video-streaming"}
                                            style={{width: '50%'}}
                                        />
                                    </div>
                                </div>
                            </a>
                            <a href="/recordaudio">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-white">
                                        <h3>Emotions in Your Voice</h3>
                                        <img
                                            className="w3-image w3-margin w3-padding-top"
                                            src={featureIcons.record}
                                            alt={"record"}
                                            style={{width: '35%'}}
                                        />
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
                            <a href="/myassignments">
                                <div style={{width: '33.33333%'}} className="w3-show-inline-block">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                        <h3>My Assignments</h3>
                                        <img
                                            className="w3-image w3-margin w3-padding-top"
                                            src={featureIcons.assignments}
                                            alt={"assignments"}
                                            style={{width: '35%'}}
                                        />
                                    </div>
                                </div>
                            </a>
                            <a href="/browse">
                                <div style={{width: '33.33333%'}} className="w3-show-inline-block">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                        <h3>Emotions in Photos & Audio</h3>
                                        <img
                                            className="w3-image w3-margin w3-padding-top"
                                            src={featureIcons.photos}
                                            alt={"photos"}
                                            style={{width: '35%'}}
                                        />
                                        <img
                                            className="w3-image w3-margin w3-padding-top"
                                            src={featureIcons.audio}
                                            alt={"audio"}
                                            style={{width: '35%'}}
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="w3-row-padding w3-center w3-margin-top">
                            <a href="/webcam">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                        <h3>Emotions on Your Face</h3>
                                        <img
                                            className="w3-image w3-margin w3-padding-top"
                                            src={featureIcons.webcam}
                                            alt={"webcam"}
                                            style={{width: '35%'}}
                                        />
                                    </div>
                                </div>
                            </a>
                            <a href="/videostreaming">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                        <h3>Emotions on Their Faces</h3>
                                        <img
                                            className="w3-image w3-margin w3-padding-top"
                                            src={featureIcons.videostreaming}
                                            alt={"video-streaming"}
                                            style={{width: '50%'}}
                                        />
                                    </div>
                                </div>
                            </a>
                            <a href="/recordaudio">
                                <div className="w3-third">
                                    <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                        <h3>Emotions in Your Voice</h3>
                                        <img
                                            className="w3-image w3-margin w3-padding-top"
                                            src={featureIcons.record}
                                            alt={"record"}
                                            style={{width: '35%'}}
                                        />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                )
            }
        } else {
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