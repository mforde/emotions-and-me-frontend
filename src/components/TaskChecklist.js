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

    updateData = (data) => {
        let tasklist = this.state.tasklistData;
        let toggled = false;

        tasklist.forEach((task) => {
            if (task === data && !toggled) {
                toggled = true;
                task.checked = !task.checked;
            }
        });

        this.setState({
            tasklistData: tasklist
        });

        this.props.onCheck(tasklist);
    };

    checklist() {
        return (
            <div className="w3-card">
                {this.state.tasklistData.map((task, i) => (
                    <Tasks type={task.type}
                           data={task}
                           key={i}
                           checked={task.checked}
                           tasklistName={this.props.tasklistName}
                           tasklist={this.state.tasklistData}
                           onCheck={() => this.updateData(task)}/>
                ))}
            </div>
        );
    }

    render() {
        return (this.checklist());
    }
}

export default TaskChecklist;