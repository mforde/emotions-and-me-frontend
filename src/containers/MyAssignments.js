import React, { Component } from 'react';
import '../App.css';
import {fetchAssignments} from "../actions/assignments";
import QuizList from "../components/QuizList";
import TasklistList from "../components/TasklistList";
import {connect} from "react-redux";

class MyAssignments extends Component {
    constructor(props) {
        super(props);

        this.quizList = [{quizName: 'Quiz Name #1'}, {quizName: 'Quiz Name #2'}];
        this.tasklistList = [{tasklistName: 'Tasklist Name #1'}, {tasklistName: 'Tasklist Name #2'}];

        this.state = {
            quizData: this.props.quizData,
            isFetching: this.props.isFetching,
            hasFailed: this.props.hasFailed,

        }
    }

    async componentDidMount() {
        this.props.fetchAssignments();
    }

    myAssignments() {
       if ((this.props.isFetching === true) || (this.props.data === null)) {
            return (
                <div className="w3-container">
                    <h1 className="w3-center w3-margin-bottom">My Assignments</h1>
                    <p className="w3-center">Loading...</p>
                </div>
            )
        }
        else if (this.props.hasFailed === true) {
            return (
                <div className="w3-container">
                    <h1 className="w3-center w3-margin-bottom">My Assignments</h1>
                    <p className="w3-center">Failed to Receive Assignments</p>
                </div>
            )
        }
        else {
            return (
                <div className="w3-container">
                    <h1 className="w3-center w3-margin-bottom">My Assignments</h1>
                    <QuizList quizzes={this.props.data}/>
                    <TasklistList tasklists={this.tasklistList}/>
                </div>
            )
        }
    }

    render() {
        return (this.myAssignments());
    }
}

const mapStateToProps = state => {
    return {
        data: state.assignments.quizData,
        isFetching: state.assignments.isFetching,
        hasFailed: state.assignments.hasFailed,
    }
};

const mapDispatchToProps = {
    fetchAssignments,
};

export default connect(mapStateToProps, mapDispatchToProps) (MyAssignments);