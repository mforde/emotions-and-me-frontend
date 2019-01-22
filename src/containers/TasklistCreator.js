import React, { Component } from 'react';
import '../App.css';
import StudentSelect from "../components/StudentSelect";

class TasklistCreator extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        numtasks: 1,
        tasks: []
    };

    render() {
        function tasklistCreator(tasks, addWebcamTask, addVideoTask, addAudioTask, addQuizTask, addBrowseTask, removeTask) {
            return (
                <div className="w3-container w3-margin">
                    <form>
                        <div className="tasks" id="tasks">
                            {tasks}
                        </div>
                        <div className="w3-dropdown-hover">
                            <button className={"w3-button w3-theme"}>Add a Task</button>
                            <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                                <button type={"button"} className={"w3-button"} onClick={addWebcamTask}>Practice with the Webcam</button>
                                <button type={"button"} className={"w3-button"} onClick={addVideoTask}>Watch Video</button>
                                <button type={"button"} className={"w3-button"} onClick={addAudioTask}>Record Yourself</button>
                                <button type={"button"} className={"w3-button"} onClick={addQuizTask}>Take a Quiz</button>
                                <button type={"button"} className={"w3-button"} onClick={addBrowseTask}>Browse Photos & Audio Clips</button>
                            </div>
                        </div>
                        <button type="button" className="w3-button w3-theme" id="removeBtn" onClick={removeTask}>Remove Task</button>
                        <StudentSelect/>
                        <button type="button" className="w3-button w3-theme w3-bar" id="btn">Save & Send Tasklist</button>
                    </form>
                </div>
            );
        }

        return (
            tasklistCreator(this.state.tasks, this.onAddWebcamTask, this.onAddVideoTask, this.onAddAudioTask,
                this.onAddQuizTask, this.onAddBrowseTask, this.onRemoveTask)
        );
    }

    onRemoveTask = () => {
        let tempTasks = this.state.tasks;
        let newNum = this.state.numtasks;
        tempTasks.pop();
        if(this.state.numtasks > 1) {
            newNum -= 1;
        }

        this.setState({
            numtasks: newNum,
            tasks: tempTasks
        });
    };

    onAddWebcamTask = () => {
        let tempTasks = this.state.tasks;
        tempTasks.push(<AddWebcamTask />);

        this.setState( {
            numtasks: this.state.numtasks + 1,
            tasks: tempTasks
        });
    };

    onAddVideoTask = () => {
        let tempTasks = this.state.tasks;
        tempTasks.push(<AddVideoTask />);

        this.setState( {
            numtasks: this.state.numtasks + 1,
            tasks: tempTasks
        });
    };

    onAddAudioTask = () => {
        let tempTasks = this.state.tasks;
        tempTasks.push(<AddAudioTask/>);

        this.setState( {
            numtasks: this.state.numtasks + 1,
            tasks: tempTasks
        });
    };

    onAddQuizTask = () => {
        let tempTasks = this.state.tasks;
        tempTasks.push(<AddQuizTask />);

        this.setState( {
            numtasks: this.state.numtasks + 1,
            tasks: tempTasks
        });
    };

    onAddBrowseTask = () => {
        let tempTasks = this.state.tasks;
        tempTasks.push(<AddBrowseTask />);

        this.setState( {
            numtasks: this.state.numtasks + 1,
            tasks: tempTasks
        });
    }
}

const AddWebcamTask = () => {
    return (
        <div className={"w3-group w3-card w3-padding"}>
            <h3>Webcam Task</h3>
            <p>Go to the Webcam feature and practice expressing
                <div className="w3-dropdown-hover">
                    <button className={"w3-button"}>Pick Emotion</button>
                    <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                        <button className={"w3-button"}>Anger</button>
                        <button className={"w3-button"}>Disgust</button>
                        <button className={"w3-button"}>Happiness</button>
                        <button className={"w3-button"}>Fear</button>
                        <button className={"w3-button"}>Sadness</button>
                        <button className={"w3-button"}>Surprise</button>
                    </div>
                </div>
            .</p>
        </div>
    );
};

const AddVideoTask = () => {
    return (
        <div className={"w3-group w3-card w3-padding"}>
            <h3>Watch Video Task</h3>
            <p>Go to the Video Streaming feature and watch this video.</p>
            <a href={"#"}/>
        </div>
    );
};

const AddAudioTask = () => {
    return (
        <div className={"w3-group w3-card w3-padding w3-padding"}>
            <h3>Record Audio Task</h3>
            <p>Go to the Record Audio feature and practice expressing
                <div className="w3-dropdown-hover">
                    <button className={"w3-button"}>Pick Emotion</button>
                    <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                        <button className={"w3-button"}>Anger</button>
                        <button className={"w3-button"}>Disgust</button>
                        <button className={"w3-button"}>Happiness</button>
                        <button className={"w3-button"}>Fear</button>
                        <button className={"w3-button"}>Sadness</button>
                        <button className={"w3-button"}>Surprise</button>
                    </div>
                </div>
            </p>
        </div>
    );
};

const AddQuizTask = () => {
    return (
        <div className={"w3-group w3-card w3-padding"}>
            <h3>Complete Quiz Task</h3>
            <p>Complete this quiz.</p>
            <a href={"#"}/>
        </div>
    );
};

const AddBrowseTask = () => {
    return (
        <div className={"w3-group w3-card w3-padding"}>
            <h3>Browse Photos & Audio Task</h3>
            <p>Go to the Browse Photos & Audio feature and look through the clips under
                <div className="w3-dropdown-hover">
                    <button className={"w3-button"}>Pick Emotion</button>
                    <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                        <button className={"w3-button"}>Anger</button>
                        <button className={"w3-button"}>Disgust</button>
                        <button className={"w3-button"}>Happiness</button>
                        <button className={"w3-button"}>Fear</button>
                        <button className={"w3-button"}>Sadness</button>
                        <button className={"w3-button"}>Surprise</button>
                    </div>
                </div>
             .</p>
            <a href={"#"}/>
        </div>
    );
};

export default TasklistCreator;