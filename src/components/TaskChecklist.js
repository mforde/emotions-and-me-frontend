import React, { Component } from 'react';
import '../App.css';
import Tasks from "./Tasks";

class TaskChecklist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasklistData: this.props.tasklistData
        };
    }

    checklist() {
        return (
            <div className="w3-card">
                {this.state.tasklistData.map(task => (
                    <Tasks type={task.type} data={task} />
                ))}
            </div>
        );
    }

    render() {
        return (this.checklist());
    }
}

export default TaskChecklist;