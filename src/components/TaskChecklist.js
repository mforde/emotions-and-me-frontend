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
            <div className="w3-card w3-center">
                {this.state.tasklistData.map((task,i) => (
                    <Tasks type={task.type} data={task} key={i}/>
                ))}
            </div>
        );
    }

    render() {
        return (this.checklist());
    }
}

export default TaskChecklist;