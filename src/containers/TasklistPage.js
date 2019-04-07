import React, { Component } from 'react';
import '../App.css';
import TaskChecklist from "../components/TaskChecklist";
import connect from "react-redux/es/connect/connect";
import {updateTasklist} from "../actions";

class TasklistPage extends Component {
    constructor(props) {
        super(props);

        this.onCheck = this.onCheck.bind(this);

        this.state = {
            tasklistName: this.props.location.state.tasklistName,
            tasklistData: this.props.location.state.tasklistData
        };
    }

    onCheck = (data) => {
        this.setState({
            tasklistData: data,
        });

        this.props.updateTasklist(this.props.user.username, this.props.user.type, this.state.tasklistName, data);
    };

    renderTasklist() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">{this.state.tasklistName}</h1>
                <TaskChecklist tasklistData={this.state.tasklistData} onCheck={this.onCheck}/>
            </div>
        );
    }

    render() {
        return (this.renderTasklist());
    }
}

const mapStateToProps = state => {
    return {
        hasFailed: state.tasklists.hasFailed,
        isSaving: state.tasklists.isFetching,
        hasSaved: state.tasklists.hasSaved,
        user: state.userInfo.user,
        userRequestStatus: state.userInfo.currentUserRequestStatus,
    }
};

const mapDispatchToProps = {
    updateTasklist,
};

export default connect(mapStateToProps, mapDispatchToProps) (TasklistPage);