import React, { Component } from 'react';
import '../App.css';
import TaskChecklist from "../components/TaskChecklist";

class TasklistPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasklistName: this.props.location.state.tasklistName,
            tasklistData: this.props.location.state.tasklistData
        };
    }

    renderTasklist() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">{this.state.tasklistName}</h1>
                <TaskChecklist tasklistData={this.state.tasklistData}/>
            </div>
        );
    }

    render() {
        return (this.renderTasklist());
    }
}

export default TasklistPage;