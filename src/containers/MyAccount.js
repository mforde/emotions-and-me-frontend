import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux";
import {addStudentToTeacher, fetchStudents, fetchTeacher} from "../actions/getUsers";

class MyAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFetching: this.props.isFetching,
            hasFailed: this.props.hasFailed,
            isAdding: this.props.isAdding,
            added: this.props.added,
            students: this.props.students,
            teacher: this.props.teacher
        }
    }

    async componentDidMount() {
        this.props.fetchStudents();
        //this.props.fetchTeacher();
    }

    myAccount() {
        if ((this.props.isFetching === true)) {
            return (
                <div className="w3-container">
                    <h1 className="w3-center w3-margin-bottom">My Account</h1>
                    <p className="w3-center">Loading...</p>
                </div>
            )
        }
        else if (this.props.hasFailed === true) {
            return (
                <div className="w3-container">
                    <h1 className="w3-center w3-margin-bottom">My Account</h1>
                    <p className="w3-center">Failed to Receive User Info</p>
                </div>
            )
        }
        else {
            alert(this.state.students);
            return (
                <div className="w3-container">
                    <h1 className="w3-center w3-margin-bottom">My Account</h1>
                </div>
            )
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
        teacher: state.users.teacher
    }
};

const mapDispatchToProps = {
    fetchStudents,
    fetchTeacher,
    addStudentToTeacher,
};

export default connect(mapStateToProps, mapDispatchToProps) (MyAccount);