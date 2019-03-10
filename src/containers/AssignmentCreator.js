import React, { Component } from 'react';
import '../App.css';
import SaveSuccess from "./modals/SaveSuccess";
import {connect} from "react-redux";
import {resetSaveQuiz, resetSaveTasklist} from "../actions";

class AssignmentCreator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            saved: "{\"status\":\"SUCCESS\"}",
        };
    }

    assignmentCreator() {
        let isSaving = this.props.quizSaving || this.props.tasklistSaving;
        let isSaved = ((JSON.stringify(this.props.quizSaved) === this.state.saved) || (JSON.stringify(this.props.tasklistSaved) === this.state.saved));
        let hasFailed = this.props.quizFailed || this.props.tasklistFailed;
        let showModal = this.props.showQModal || this.props.showTModal;
        let handleClose = this.props.resetSaveQuiz;

        if (this.props.showTModal) {
            handleClose = this.props.resetSaveTasklist;
        }

        return (
            <div className="w3-container">
                <SaveSuccess
                    showModal={showModal}
                    handleClose={handleClose}
                    isSaving={isSaving}
                    hasFailed={hasFailed}
                    hasSaved={isSaved}
                />
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

const mapStateToProps = state => {
    return {
        quizSaving: state.assignments.isSaving,
        quizFailed: state.assignments.hasFailed,
        quizSaved: state.assignments.hasSaved,
        showQModal: state.assignments.showModal,
        tasklistSaving: state.tasklists.isSaving,
        tasklistFailed: state.tasklists.hasFailed,
        tasklistSaved: state.tasklists.hasSaved,
        showTModal: state.tasklists.showModal,
    }
};

const mapDispatchToProps = {
    resetSaveQuiz,
    resetSaveTasklist,
};

export default connect(mapStateToProps, mapDispatchToProps) (AssignmentCreator);