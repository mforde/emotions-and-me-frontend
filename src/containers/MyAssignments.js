import React, { Component } from 'react';
import '../App.css';

class MyAssignments extends Component {

    myAssignments() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">My Assignments</h1>
                <div className="w3-row-padding w3-center w3-margin-top">
                    <a href="/testQuiz">
                        <div className="w3-bar">
                            <div className="w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                <h3>Quiz 1</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }

    render() {
        return (this.myAssignments());
    }
}

export default MyAssignments;