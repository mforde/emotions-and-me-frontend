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

    componentWillReceiveProps(nextProps) {
        if (this.props.user !== nextProps.user) {
            this.props.fetchAssignments(nextProps.user.username, nextProps.user.type);
            this.props.fetchTasklists(nextProps.user.username, nextProps.user.type);
        }
    }

    removeQuiz = (quizName) => {
        this.props.deleteAssignment(this.props.user.username, this.props.user.type, quizName);
    };

    removeTasklist = (tasklistName) => {
        this.props.deleteTasklist(this.props.user.username, this.props.user.type, tasklistName);
    };

    myQuizzes() {
        if (this.props.quizHasFailed === true) {
            return (
                <p className="w3-center">Failed to Receive Quizzes</p>
            )
        } else if ((this.props.isFetchingQuiz === true) || (this.props.quizData === null)) {
            return (
                <p className="w3-center">Loading Quizzes...</p>
            )
        } else {
            return (
                <QuizList quizzes={this.props.quizData.assignments} remove={this.removeQuiz}/>
            )
        }
    }

    myTasklists() {
        if (this.props.tasklistHasFailed === true) {
            return (
                <p className="w3-center">Failed to Receive Tasklists</p>
            )
        } else if ((this.props.isFetchingTasklist === true) || (this.props.tasklistData === null)) {
            return (
                <p className="w3-center">Loading Tasklists...</p>
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
        user: state.userInfo.user,
        userRequestStatus: state.userInfo.currentUserRequestStatus,
    }
};

const mapDispatchToProps = {
    fetchAssignments,
    fetchTasklists,
    deleteAssignment,
    deleteTasklist,
};

export default connect(mapStateToProps, mapDispatchToProps) (MyAssignments);