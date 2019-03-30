import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux";
import {addStudentToTeacher, fetchStudents, fetchTeacher} from "../actions/getUsers";
import RequestStatus from "../constants/RequestStatus";
import AddStudentTeacher from "../components/AddStudentTeacher";

class MyAccount extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            addStudent: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.user !== nextProps.user) {
            if (nextProps.user.type === 'TEACHER') {
                this.props.fetchStudents(nextProps.user.username);
            }
            else if (nextProps.user.type === 'STUDENT') {
                this.props.fetchTeacher(nextProps.user.username);
            }
        }
    }

    handleChange(e) {
        this.setState({addStudent: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addStudentToTeacher(this.props.user.username, this.state.addStudent);
    };

    myAccount() {
        switch (this.props.userRequestStatus) {
            case RequestStatus.SUCCEEDED:
                if (this.props.user.type === 'TEACHER') {
                    return (
                        <div className="w3-container">
                            <h1 className="w3-center w3-margin-bottom">My Account</h1>
                            <AddStudentTeacher
                                username={this.props.user.username}
                                firstName={this.props.user.first_name}
                                lastName={this.props.user.last_name}
                                email={this.props.user.email}
                                accountType={this.props.user.type}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                accountList={this.props.students}
                                hasFailed={this.props.hasFailed}
                                isFetching={this.props.isFetching}
                            />
                        </div>
                    );
                }
                else {
                    return (
                        <div className="w3-container">
                            <h1 className="w3-center w3-margin-bottom">My Account</h1>
                            <AddStudentTeacher
                                username={this.props.user.username}
                                firstName={this.props.user.first_name}
                                lastName={this.props.user.last_name}
                                email={this.props.user.email}
                                accountType={this.props.user.type}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                accountList={this.props.teacher}
                                hasFailed={this.props.hasFailed}
                                isFetching={this.props.isFetching}
                            />
                        </div>
                    );
                }
            case RequestStatus.FAILED:
                return (
                    <div className="w3-container">
                        <h1 className="w3-center w3-margin-bottom">My Account</h1>
                        <p className="w3-center">Failed to Receive User Info</p>
                    </div>
                );
            case RequestStatus.PENDING:
            default:
                return (
                    <div className="w3-container">
                        <h1 className="w3-center w3-margin-bottom">My Account</h1>
                        <p className="w3-center">Loading...</p>
                    </div>
                );
        }
    }

    render() {
        return (this.myAccount());
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.users.isFetching,
        hasFailed: state.users.hasFailed,
        isAdding: state.users.isAdding,
        added: state.users.added,
        students: state.users.students,
        teacher: state.users.teacher,
        user: state.userInfo.user,
        userRequestStatus: state.userInfo.currentUserRequestStatus,
    }
};

const mapDispatchToProps = {
    fetchStudents,
    fetchTeacher,
    addStudentToTeacher,
};

export default connect(mapStateToProps, mapDispatchToProps) (MyAccount);