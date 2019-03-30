import React, { Component } from 'react';
import '../App.css';
import FilteredMultiSelect from "react-filtered-multiselect";
import {fetchAssignments, fetchStudents, sendTasklist} from "../actions";
import {connect} from "react-redux";
import {Field, Form} from "react-final-form";
import arrayMutators from "final-form-arrays";
import {FieldArray} from "react-final-form-arrays";
import Redirect from "./QuizMakerPage";

class TasklistCreator extends Component {
    constructor(props) {
        super(props);

        this.handleDeselect = this.handleDeselect.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            students: this.props.students,
            selectedStudents: [],
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.user !== nextProps.user) {
            if (nextProps.user.type === 'TEACHER') {
                this.props.fetchStudents(nextProps.user.username);
                this.props.fetchAssignments(nextProps.user.username, nextProps.user.type);
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
        selectedStudents.sort(function (a, b) {
            if (a.label < b.label) {
                return -1;
            }
            if (a.label > b.label) {
                return 1;
            }
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

        this.props.sendTasklist(this.props.user.username, studentUsers, JSON.stringify({
            'teacher'       : this.props.user.username,
            'students'      : this.state.selectedStudents,
            'tasklistName'      : values.tasklistName,
            'tasklistData'      : this.convertTasklistData(values)
        }));
    };

    tasklistCreator = () => {
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
                                    <label htmlFor="tasklistName">Tasklist Name:</label>
                                    <Field
                                        name="tasklistName"
                                        component="input"
                                        id="tasklistName"
                                        className="w3-bar"
                                    />
                                </div>
                                <FieldArray name="webcamTasks">
                                    {({fields}) =>
                                        fields.map((name, index) => (
                                            <div key={name}
                                                 className="w3-group w3-card w3-display-container w3-padding w3-padding-24">
                                                <div
                                                    onClick={() => fields.remove(index)}
                                                    className="w3-display-topright w3-padding w3-padding-16"
                                                    style={{cursor: 'pointer'}}>✖
                                                </div>
                                                <label className="w3-padding-top">Webcam Task {index + 1}:</label>
                                                {this.WebcamTask(name)}
                                            </div>
                                        ))}
                                </FieldArray>
                                <div className="webcam-buttons w3-padding">
                                    <button type="button" className="w3-button w3-theme"
                                            onClick={() => push('webcamTasks', undefined)}>
                                        Add Webcam Task
                                    </button>
                                </div>
                                <FieldArray name="videoTasks">
                                    {({fields}) =>
                                        fields.map((name, index) => (
                                            <div key={name}
                                                 className="w3-group w3-card w3-display-container w3-padding w3-padding-24">
                                                <div
                                                    onClick={() => fields.remove(index)}
                                                    className="w3-display-topright w3-padding w3-padding-16"
                                                    style={{cursor: 'pointer'}}>✖
                                                </div>
                                                <label className="w3-padding-top">Video Streaming
                                                    Task {index + 1}:</label>
                                                {this.VideoTask(name)}
                                            </div>
                                        ))}
                                </FieldArray>
                                <div className="video-buttons w3-padding">
                                    <button type="button" className="w3-button w3-theme"
                                            onClick={() => push('videoTasks', undefined)}>
                                        Add Video Streaming Task
                                    </button>
                                </div>
                                <FieldArray name="audioTasks">
                                    {({fields}) =>
                                        fields.map((name, index) => (
                                            <div key={name}
                                                 className="w3-group w3-card w3-display-container w3-padding w3-padding-24">
                                                <div
                                                    onClick={() => fields.remove(index)}
                                                    className="w3-display-topright w3-padding w3-padding-16"
                                                    style={{cursor: 'pointer'}}>✖
                                                </div>
                                                <label className="w3-padding-top">Audio Recording
                                                    Task {index + 1}:</label>
                                                {this.AudioTask(name)}
                                            </div>
                                        ))}
                                </FieldArray>
                                <div className="audio-buttons w3-padding">
                                    <button type="button" className="w3-button w3-theme"
                                            onClick={() => push('audioTasks', undefined)}>
                                        Add Audio Recording Task
                                    </button>
                                </div>
                                <FieldArray name="browseTasks">
                                    {({fields}) =>
                                        fields.map((name, index) => (
                                            <div key={name}
                                                 className="w3-group w3-card w3-display-container w3-padding w3-padding-24">
                                                <div
                                                    onClick={() => fields.remove(index)}
                                                    className="w3-display-topright w3-padding w3-padding-16"
                                                    style={{cursor: 'pointer'}}>✖
                                                </div>
                                                <label className="w3-padding-top">Browse Photos & Audio
                                                    Task {index + 1}:</label>
                                                {this.BrowseTask(name)}
                                            </div>
                                        ))}
                                </FieldArray>
                                <div className="browse-buttons w3-padding">
                                    <button type="button" className="w3-button w3-theme"
                                            onClick={() => push('browseTasks', undefined)}>
                                        Add Browse Photos & Audio Task
                                    </button>
                                </div>
                                <FieldArray name="quizTasks">
                                    {({fields}) =>
                                        fields.map((name, index) => (
                                            <div key={name}
                                                 className="w3-group w3-card w3-display-container w3-padding w3-padding-24">
                                                <div
                                                    onClick={() => fields.remove(index)}
                                                    className="w3-display-topright w3-padding w3-padding-16"
                                                    style={{cursor: 'pointer'}}>✖
                                                </div>
                                                <label className="w3-padding-top">Quiz Task {index + 1}:</label>
                                                {this.QuizTask(name)}
                                            </div>
                                        ))}
                                </FieldArray>
                                <div className="quiz-buttons w3-padding">
                                    <button type="button" className="w3-button w3-theme"
                                            onClick={() => push('quizTasks', undefined)}>
                                        Add Quiz Task
                                    </button>
                                </div>
                                {this.multiStudentSelect()}
                                <div className="buttons w3-padding-top">
                                    <button type="submit" className="w3-button w3-theme w3-bar w3-half"
                                            disabled={submitting || pristine}>
                                        Save & Send Tasklist
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
        if (this.props.isFetchingUser === true) {
            return (
                <div className="w3-container w3-padding-top">
                    <label className="w3-padding w3-medium">Select Students to Receive Quiz</label>
                    <div className="w3-row">
                        <p className="w3-center">Loading...</p>
                    </div>
                </div>
            )
        } else if (this.props.studentHasFailed === true) {
            return (
                <div className="w3-container w3-padding-top">
                    <label className="w3-padding w3-medium">Select Students to Receive Quiz</label>
                    <div className="w3-row">
                        <p className="w3-center">Failed to Receive Students</p>
                    </div>
                </div>
            )
        } else if (this.props.students !== null) {
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
        return (
            <div className="w3-container w3-padding-top">
                <label className="w3-padding w3-medium">Select Students to Receive Quiz</label>
                <div className="w3-row">
                    <p className="w3-center">Something Else Failed???</p>
                </div>
            </div>
        )
    }

    render() {
        if (this.props.showModal) {
            return (
                <Redirect to={'/assignmentcreator'}/>
            );
        }
        return (this.tasklistCreator());
    }

    WebcamTask = (name) => {
        return (
            <div className="w3-group w3-padding">
                <p>Pick an emotion for the student to practice in the webcam feature</p>
                <label className="w3-margin-right">Emotion: </label>
                <Field component="select" className="w3-select" name={`${name}.emotion`}>
                    <option/>
                    <option value="anger">Anger</option>
                    <option value="disgust">Disgust</option>
                    <option value="happy">Happy</option>
                    <option value="fear">Fear</option>
                    <option value="sad">Sad</option>
                    <option value="surprise">Surprise</option>
                </Field>
            </div>
        );
    };

    VideoTask = (name) => {
        return (
            <div className="w3-group w3-padding">
                <p>Insert URL/link for a YouTube Video for the student to watch</p>
                <label className="w3-margin-right">YouTube Link: </label>
                <Field
                    name={`${name}.url`}
                    component="input"
                    className="w3-bar"
                />
            </div>
        );
    };

    AudioTask = (name) => {
        return (
            <div className="w3-group w3-padding">
                <p>Pick an emotion for the student to practice in the record audio feature</p>
                <label className="w3-margin-right">Emotion: </label>
                <Field component="select" className="w3-select" name={`${name}.emotion`}>
                    <option/>
                    <option value="anger">Anger</option>
                    <option value="disgust">Disgust</option>
                    <option value="happy">Happy</option>
                    <option value="fear">Fear</option>
                    <option value="sad">Sad</option>
                    <option value="surprise">Surprise</option>
                </Field>
            </div>
        );
    };

    BrowseTask = (name) => {
        return (
            <div className="w3-group w3-padding">
                <p>Pick an emotion for the student to browse photos and audio clips of in the browse feature</p>
                <label className="w3-margin-right">Emotion: </label>
                <Field component="select" className="w3-select" name={`${name}.emotion`}>
                    <option/>
                    <option value="anger">Anger</option>
                    <option value="disgust">Disgust</option>
                    <option value="happy">Happy</option>
                    <option value="fear">Fear</option>
                    <option value="sad">Sad</option>
                    <option value="surprise">Surprise</option>
                </Field>
            </div>
        );
    };

    QuizTask = (name) => {
        return (
            <div className="w3-group w3-padding">
                <p>Pick a quiz for the student to complete</p>
                <label className="w3-margin-right">Quizzes: </label>
                {this.QuizSelect(name)}
            </div>
        );
    };

    QuizSelect = (name) => {
        if (this.props.isFetching === true) {
            return (
                <p className="w3-center">Loading...</p>
            )
        } else if (this.props.hasFailed === true) {
            return (
                <p className="w3-center">Failed to Receive Quizzes</p>
            )
        } else if (this.props.quizzes !== null) {
            return (
                <Field component="select" className="w3-select" name={`${name}.quiz`}>
                    <option/>
                    {
                        this.props.quizzes.assignments.map(quiz => (
                            <option key={quiz.quizName} value={quiz.quizName}>{quiz.quizName}</option>
                        ))
                    }
                </Field>
            );
        }
        return (
            <p className="w3-center">Something Else Went Wrong???</p>
        )
    };

    convertTasklistData = (values) => {
        let tasks = [];
        if ('webcamTasks' in values) {
            values.webcamTasks.forEach(task => {
                let temp = {
                    type: "webcam",
                    emotion: task.emotion,
                    checked: false,
                };
                tasks.push(temp)
            });
        }
        if ('videoTasks' in values) {
            values.videoTasks.forEach(task => {
                let temp = {
                    type: "video",
                    url: task.url,
                    checked: false,
                };
                tasks.push(temp)
            });
        }
        if ('audioTasks' in values) {
            values.audioTasks.forEach(task => {
                let temp = {
                    type: "audio",
                    emotion: task.emotion,
                    checked: false,
                };
                tasks.push(temp)
            });
        }
        if ('browseTasks' in values) {
            values.browseTasks.forEach(task => {
                let temp = {
                    type: "browse",
                    emotion: task.emotion,
                    checked: false,
                };
                tasks.push(temp)
            });
        }
        if ('quizTasks' in values) {
            values.quizTasks.forEach(task => {
                let temp = {
                    type: "quiz",
                    quizName: task.quiz,
                    checked: false,
                };
                tasks.push(temp)
            });
        }
        return tasks;
    };
}

const mapStateToProps = state => {
    return {
        saveData: state.tasklists.hasSaved,
        isSaving: state.tasklists.isSaving,
        failedSave: state.tasklists.hasFailed,
        showModal: state.tasklists.showModal,
        hasFailed: state.assignments.hasFailed,
        quizzes: state.assignments.quizData,
        isFetching: state.assignments.isFetching,
        isFetchingUser: state.users.isFetching,
        studentHasFailed: state.users.hasFailed,
        students: state.users.students,
        user: state.userInfo.user,
        userRequestStatus: state.userInfo.currentUserRequestStatus,
    }
};

const mapDispatchToProps = {
    sendTasklist,
    fetchAssignments,
    fetchStudents,
};

export default connect(mapStateToProps, mapDispatchToProps) (TasklistCreator);