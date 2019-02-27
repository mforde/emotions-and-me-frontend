import React, { Component } from 'react';
import '../App.css';
import QuizList from "../components/QuizList";
import TasklistList from "../components/TasklistList";
import {connect} from "react-redux";
import {fetchAssignments, fetchTasklists} from "../actions";

class MyAssignments extends Component {
    constructor(props) {
        super(props);

        this.quizList = [{quizName: 'Quiz Name #1'}, {quizName: 'Quiz Name #2'}];
        this.tasklistList = [{tasklistName: 'Tasklist Name #1'}, {tasklistName: 'Tasklist Name #2'}];

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

    myAssignments() {
       if (((this.props.isFetchingQuiz === true) && (this.props.isFetchingTasklist === true))
           || (this.props.quizData === null) || (this.props.tasklistData === null)) {
            return (
                <div className="w3-container">
                    <h1 className="w3-center w3-margin-bottom">My Assignments</h1>
                    <p className="w3-center">Loading...</p>
                </div>
            )
        }
        else if ((this.props.quizHasFailed === true) || (this.props.tasklistHasFailed === true)) {
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
                    <QuizList quizzes={this.props.quizData}/>
                    <TasklistList tasklists={this.props.tasklistData.tasklists}/>
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