import React, { Component } from 'react';
import '../App.css';
import {fetchAssignments} from "../actions/getAssignments";

class MyAssignments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : null
        }
    }

    componentDidMount() {
        let data = fetchAssignments();
        this.setState(data);
    }

    onClick() {
        //Get list of assignments from backend
        //Send backend name? of selected quiz and get quiz data
        //Convert data to proper quiz format
        //Go to quiz page
    }

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