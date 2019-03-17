import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import '../App.css';
import {sendAssignment} from '../actions/assignments';
import {connect} from "react-redux";
import {fetchStudents} from "../actions/getUsers";
import FilteredMultiSelect from "react-filtered-multiselect";
import Redirect from "react-router-dom/es/Redirect";

class QuizMakerPage extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleDeselect = this.handleDeselect.bind(this);

        this.state = {
            selectedStudents: [],
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.user !== nextProps.user) {
            if (nextProps.user.type === 'teacher') {
                this.props.fetchStudents(nextProps.user.username);
            }
        }
    }

    handleDeselect = (deselectedStudent) => {
        let selectedStudents = this.state.selectedStudents.slice();
        deselectedStudent.forEach(option => {
            selectedStudents.splice(selectedStudents.indexOf(option), 1)
        });
        this.setState({selectedStudents});
    };

    handleSelect = (selectedStudents) => {
        selectedStudents.sort(function(a, b){
            if(a.label < b.label) { return -1; }
            if(a.label > b.label) { return 1; }
            return 0;
        });
        this.setState({selectedStudents})
    };

    handleSubmit = async values => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(300);

        let studentUsers = [];
        this.state.selectedStudents.forEach(function (student) {
            studentUsers.push(student.value);
        });

        this.props.sendAssignment(this.props.user.username, studentUsers, JSON.stringify({
            'teacher'       : this.props.user.username,
            'students'      : this.state.selectedStudents,
            'quizName'      : values.quizName,
            'quizData'      : values.questions,
        }));
    };

    QuizForm = () => {
        return (
            <div className="w3-container w3-margin">
                <Form
                    onSubmit={this.handleSubmit}
                    mutators={{
                        ...arrayMutators
                    }}
                    render={({
                                 handleSubmit,
                                 mutators: {push, pop},
                                 pristine,
                                 reset,
                                 submitting,
                                 values
                             }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <div className={"w3-group w3-card w3-padding w3-padding-24"}>
                                    <label htmlFor="quizName">Quiz Name:</label>
                                    <Field
                                        name="quizName"
                                        component="input"
                                        id="quizName"
                                        className="w3-bar"
                                    />
                                </div>
                                <FieldArray name="questions">
                                    {({fields}) =>
                                        fields.map((name, index) => (
                                            <div key={name}
                                                 className="w3-group w3-card w3-display-container w3-padding w3-padding-24">
                                                <div
                                                    onClick={() => fields.remove(index)}
                                                    className="w3-display-topright w3-padding w3-padding-16"
                                                    style={{cursor: 'pointer'}}>✖
                                                </div>
                                                <div className="w3-padding-top">
                                                    <label>Question {index + 1}:</label>
                                                    <div className="w3-container w3-right">
                                                        <button type="button" className="w3-button"
                                                                id={"photoQ" + index}>Add Photo
                                                        </button>
                                                        <button type="button" className="w3-button"
                                                                id={"audioQ" + index}>Add Audio
                                                        </button>
                                                    </div>
                                                </div>
                                                <Field
                                                    name={`${name}.Q`}
                                                    component="input"
                                                    id="text"
                                                    className="w3-bar"
                                                />
                                                <div className="w3-padding-top">
                                                    <label>Answer A:</label>
                                                    <div className="w3-container w3-right">
                                                        <button type="button" className="w3-button"
                                                                id={"photoA" + index}>Add Photo
                                                        </button>
                                                        <button type="button" className="w3-button"
                                                                id={"audioA" + index}>Add Audio
                                                        </button>
                                                    </div>
                                                    <Field
                                                        name={`${name}.A`}
                                                        component="input"
                                                        className="w3-bar"
                                                        id={"answerA" + index}
                                                    />
                                                </div>
                                                <div className="w3-padding-top">
                                                    <label>Answer B:</label>
                                                    <div className="w3-container w3-right">
                                                        <button type="button" className="w3-button"
                                                                id={"photoB" + index}>Add Photo
                                                        </button>
                                                        <button type="button" className="w3-button"
                                                                id={"audioB" + index}>Add Audio
                                                        </button>
                                                    </div>
                                                    <Field
                                                        name={`${name}.B`}
                                                        component="input"
                                                        className="w3-bar"
                                                        id={"answerB" + index}
                                                    />
                                                </div>
                                                <div className="w3-padding-top">
                                                    <label>Answer C:</label>
                                                    <div className="w3-container w3-right">
                                                        <button type="button" className="w3-button"
                                                                id={"photoC" + index}>Add Photo
                                                        </button>
                                                        <button type="button" className="w3-button"
                                                                id={"audioC" + index}>Add Audio
                                                        </button>
                                                    </div>
                                                    <Field
                                                        name={`${name}.C`}
                                                        component="input"
                                                        className="w3-bar"
                                                        id={"answerC" + index}
                                                    />
                                                </div>
                                                <div className="w3-padding-top">
                                                    <label>Answer D:</label>
                                                    <div className="w3-container w3-right">
                                                        <button type="button" className="w3-button"
                                                                id={"photoD" + index}>Add Photo
                                                        </button>
                                                        <button type="button" className="w3-button"
                                                                id={"audioD" + index}>Add Audio
                                                        </button>
                                                    </div>
                                                    <Field
                                                        name={`${name}.D`}
                                                        component="input"
                                                        className="w3-bar"
                                                        id={"answerD" + index}
                                                    />
                                                </div>
                                                <div className="w3-padding-top">
                                                    <label>Correct Answer:</label>
                                                    <div className="radio-inline">
                                                        <label className="w3-padding">
                                                            <Field
                                                                name={`${name}.correct`}
                                                                component="input"
                                                                type="radio"
                                                                className="w3-radio w3-padding"
                                                                id="correctA"
                                                                value="A"
                                                            />{' '}
                                                            A
                                                        </label>
                                                        <label className="w3-padding">
                                                            <Field
                                                                name={`${name}.correct`}
                                                                component="input"
                                                                type="radio"
                                                                className="w3-radio w3-padding"
                                                                id="correctB"
                                                                value="B"
                                                            />{' '}
                                                            B
                                                        </label>
                                                        <label className="w3-padding">
                                                            <Field
                                                                name={`${name}.correct`}
                                                                component="input"
                                                                type="radio"
                                                                className="w3-radio w3-padding"
                                                                id="correctC"
                                                                value="C"
                                                            />{' '}
                                                            C
                                                        </label>
                                                        <label className="w3-padding">
                                                            <Field
                                                                name={`${name}.correct`}
                                                                component="input"
                                                                type="radio"
                                                                className="w3-radio w3-padding"
                                                                id="correctD"
                                                                value="D"
                                                            />{' '}
                                                            D
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </FieldArray>
                                <div className="buttons w3-padding">
                                    <button type="button" className="w3-button w3-theme"
                                            onClick={() => push('questions', undefined)}>
                                        Add Question
                                    </button>
                                    <button type="button" className="w3-button w3-theme"
                                            onClick={() => pop('questions')}>
                                        Remove Question
                                    </button>
                                </div>
                                {this.multiStudentSelect()}
                                <div className="buttons w3-padding-top">
                                    <button type="submit" className="w3-button w3-theme w3-bar w3-half"
                                            disabled={submitting || pristine}>
                                        Save & Send Quiz
                                    </button>
                                    <button
                                        type="button"
                                        onClick={reset}
                                        className="w3-button w3-theme w3-bar w3-half"
                                        disabled={submitting || pristine}>
                                        Clear
                                    </button>
                                </div>
                            </form>
                        )
                    }}
                />
            </div>
        );
    };

    multiStudentSelect() {
        if (this.props.studentHasFailed === true) {
            return (
                <div className="w3-container w3-padding-top">
                    <label className="w3-padding w3-medium">Select Students to Receive Quiz</label>
                    <div className="w3-row">
                        <p className="w3-center">Failed to Receive Students</p>
                    </div>
                </div>
            )
        }
        else if (this.props.isFetching === true || this.props.students === null) {
            return (
                <div className="w3-container w3-padding-top">
                    <label className="w3-padding w3-medium">Select Students to Receive Quiz</label>
                    <div className="w3-row">
                        <p className="w3-center">Loading...</p>
                    </div>
                </div>
            )
        }
        else {//if (this.props.students !== null){
            return (
                <div className="w3-container w3-padding-top">
                    <label className="w3-padding w3-medium">Select Students to Receive Quiz</label>
                    <div className="w3-row">
                        <div className="w3-half">
                            <FilteredMultiSelect
                                buttonText="Add"
                                classNames={{
                                    filter: 'form-control',
                                    select: 'form-control',
                                    button: 'w3-btn w3-btn btn-block btn-default',
                                    buttonActive: 'w3-btn w3-btn btn-block w3-theme'
                                }}
                                onChange={this.handleSelect}
                                options={this.props.students}
                                selectedOptions={this.state.selectedStudents}
                                textProp="label"
                                placeholder="Type to filter students"
                            />
                        </div>
                        <div className="w3-half">
                            <FilteredMultiSelect
                                buttonText="Remove"
                                classNames={{
                                    filter: 'form-control',
                                    select: 'form-control',
                                    button: 'w3-btn w3-btn btn-block btn-default',
                                    buttonActive: 'w3-btn w3-btn btn-block w3-theme'
                                }}
                                onChange={this.handleDeselect}
                                options={this.state.selectedStudents}
                                textProp="label"
                                placeholder="Type to filter students"
                            />
                        </div>
                    </div>
                </div>
            );
        }
        /*return (
            <div className="w3-container w3-padding-top">
                <label className="w3-padding w3-medium">Select Students to Receive Quiz</label>
                <div className="w3-row">
                    <p className="w3-center">Something Else Failed???</p>
                </div>
            </div>
        )*/
    }

    render() {
        if (this.props.showModal) {
            return (
                <Redirect to={'/assignmentcreator'}/>
            );
        }
        return (this.QuizForm());
    }
}

const mapStateToProps = state => {
    return {
        saveData: state.assignments.hasSaved,
        isSaving: state.assignments.isSaving,
        hasFailed: state.assignments.hasFailed,
        showModal: state.assignments.showModal,
        isFetching: state.users.isFetching,
        studentHasFailed: state.users.hasFailed,
        students: state.users.students,
        user: state.userInfo.user,
        userRequestStatus: state.userInfo.currentUserRequestStatus,
    }
};

const mapDispatchToProps = {
    sendAssignment,
    fetchStudents
};

export default connect(mapStateToProps, mapDispatchToProps) (QuizMakerPage);