import React, { Component } from 'react';
import '../App.css';
import {fetchAssignments} from "../actions/getAssignments";
import QuizList from "../components/QuizList";
import TasklistList from "../components/TasklistList";

class MyAssignments extends Component {
    constructor(props) {
        super(props);

        this.quizList = [{quizName : 'Quiz Name #1'}, {quizName: 'Quiz Name #2'}];
        this.tasklistList = [{tasklistName : 'Tasklist Name #1'}, {tasklistName: 'Tasklist Name #2'}];

        this.state = {
            data : null
        }
    }

    componentDidMount() {
        let data = fetchAssignments();
        this.setState(data);
    }

    onClick(quizName) {
        //Get list of assignments from backend
        //Send backend name? of selected quiz and get quiz data
        //Convert data to proper quiz format
        //Go to quiz page
    }

    myAssignments() {
        return (
            <div className="w3-container">
                <h1 className="w3-center w3-margin-bottom">My Assignments</h1>
                <div className="w3-row-padding w3-center">
                    <a href="/testQuiz">
                        <div className=" w3-theme w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                            <h4>Test Quiz</h4>
                        </div>
                    </a>
                </div>
                <QuizList quizzes={this.quizList} onClick={this.onClick}/>
                <TasklistList tasklists={this.tasklistList} onClick={this.onClick}/>
            </div>
        )
    }

    render() {
        return (this.myAssignments());
    }
}

export default MyAssignments;