import React, { Component } from 'react';
import '../App.css';

class AssignmentCreator extends Component {

    assignmentCreator() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">Assignment Creator</h1>
                <div className="w3-row-padding w3-center w3-margin-top">
                    <a href="/assignmentcreator/quizmaker">
                        <div className="w3-half">
                            <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                <h3>Quiz Maker</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/assignmentcreator/tasklistcreator">
                        <div className="w3-half">
                            <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                <h3>Tasklist Creator</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }

    render() {
        return (this.assignmentCreator());
    }
}

export default AssignmentCreator;