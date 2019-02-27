import React, { Component } from 'react';
import '../App.css';
import QuizList from "../components/QuizList";
import TasklistList from "../components/TasklistList";
import {connect} from "react-redux";
import {fetchAssignments, fetchTasklists} from "../actions";

class MyAssignments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quizData: this.props.quizData,
            tasklistData: this.props.tasklistData,
            isFetching: this.props.isFetching,
            hasFailed: this.props.hasFailed,
        }
    }

    async componentDidMount() {
        this.props.fetchAssignments();
        this.props.fetchTasklists();
    }

    myQuizzes() {
        if ((this.props.isFetchingQuiz === true) || (this.props.quizData === null)) {
            return (
                <p className="w3-center">Loading Quizzes...</p>
            )
        } else if ((this.props.quizHasFailed === true) || (this.props.tasklistHasFailed === true)) {
            return (
                <p className="w3-center">Failed to Receive Quizzes</p>
            )
        } else {
            return (
                <QuizList quizzes={this.props.quizData}/>
            )
        }
    }

    myTasklists() {
        if ((this.props.isFetchingTasklist === true) || (this.props.tasklistData === null)) {
            return (
                <p className="w3-center">Loading Tasklists...</p>
            )
        } else if (this.props.tasklistHasFailed === true) {
            return (
                <p className="w3-center">Failed to Receive Tasklists</p>
            )
        } else {
            return (
                <TasklistList tasklists={this.props.tasklistData.tasklists}/>
            )
        }
    }

    render() {
        return (
            <div className="w3-container">
                <h1 className="w3-center w3-margin-bottom">My Assignments</h1>
                {this.myQuizzes()}
                {this.myTasklists()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quizData: state.assignments.quizData,
        isFetchingQuiz: state.assignments.isFetching,
        quizHasFailed: state.assignments.hasFailed,
        tasklistData: state.tasklists.tasklistData,
        isFetchingTasklist: state.tasklists.isFetching,
        tasklistHasFailed: state.tasklists.hasFailed,
    }
};

const mapDispatchToProps = {
    fetchAssignments,
    fetchTasklists,
};

export default connect(mapStateToProps, mapDispatchToProps) (MyAssignments);