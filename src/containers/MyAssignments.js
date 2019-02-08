import React, { Component } from 'react';
import '../App.css';
import {fetchAssignments} from "../actions/getAssignments";
import QuizList from "../components/QuizList";
import TasklistList from "../components/TasklistList";

class MyAssignments extends Component {
    constructor(props) {
        super(props);

        this.quizList = [{quizName: 'Quiz Name #1'}, {quizName: 'Quiz Name #2'}];
        this.tasklistList = [{tasklistName: 'Tasklist Name #1'}, {tasklistName: 'Tasklist Name #2'}];

        this.state = {
            data: null
        }

    }

    componentDidMount() {
        let data = fetchAssignments();
        this.setState(data);
    }

    myAssignments() {
        return (
            <div className="w3-container">
                <h1 className="w3-center w3-margin-bottom">My Assignments</h1>
                <QuizList quizzes={this.quizList}/>
                <TasklistList tasklists={this.tasklistList}/>
            </div>
        )
    }

    render() {
        return (this.myAssignments());
    }
}

export default MyAssignments;