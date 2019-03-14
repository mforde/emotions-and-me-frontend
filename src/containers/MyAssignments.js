import React, { Component } from 'react';
import '../App.css';
import QuizList from "../components/QuizList";
import TasklistList from "../components/TasklistList";
import {connect} from "react-redux";
import {
    deleteAssignment,
    deleteTasklist,
    fetchAssignments,
    fetchTasklists,
} from "../actions";

class MyAssignments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quizData: this.props.quizData,
            tasklistData: this.props.tasklistData,
            isFetchingQuiz: this.props.isFetchingQuiz,
            quizHasFailed: this.props.quizHasFailed,
            removingQuiz: this.props.removingQuiz,
            removedQuiz: this.props.removedQuiz,
            isFetchingTasklist: this.props.isFetchingTasklist,
            tasklistHasFailed: this.props.tasklistHasFailed,
            removingTasklist: this.props.removingTasklist,
            removedTasklist: this.props.removedTasklist,
        }
    }

    async componentDidMount() {
        this.props.fetchAssignments();
        this.props.fetchTasklists();
    }

    removeQuiz = (quizName) => {
        this.props.deleteAssignment(quizName);
    };

    removeTasklist = (tasklistName) => {
        this.props.deleteTasklist(tasklistName);
    };

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
                <QuizList quizzes={this.props.quizData.assignments} remove={this.removeQuiz}/>
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
                <TasklistList tasklists={this.props.tasklistData.tasklists} remove={this.removeTasklist}/>
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
        removingQuiz: state.assignments.isRemoving,
        removedQuiz: state.assignments.hasRemoved,
        tasklistData: state.tasklists.tasklistData,
        isFetchingTasklist: state.tasklists.isFetching,
        tasklistHasFailed: state.tasklists.hasFailed,
        removingTasklist: state.tasklists.isRemoving,
        removedTasklist: state.tasklists.hasRemoved,
    }
};

const mapDispatchToProps = {
    fetchAssignments,
    fetchTasklists,
    deleteAssignment,
    deleteTasklist,
};

export default connect(mapStateToProps, mapDispatchToProps) (MyAssignments);