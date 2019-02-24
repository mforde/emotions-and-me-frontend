import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux";
import {addStudentToTeacher, fetchStudents, fetchTeacher} from "../actions/getUsers";

class MyAccount extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            isFetching: this.props.isFetching,
            hasFailed: this.props.hasFailed,
            isAdding: this.props.isAdding,
            added: this.props.added,
            students: this.props.students,
            teacher: this.props.teacher,
            addStudent: ''
        }
    }

    async componentDidMount() {
        this.props.fetchStudents();
        //this.props.fetchTeacher();
    }

    handleChange(e) {
        this.setState({addStudent: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addStudentToTeacher(this.state.addStudent);
    };

    myAccount() {
        if (this.props.isFetching === true) {
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
            //alert(this.state.students);
            return (
                <div className="w3-container">
                    <h1 className="w3-center w3-margin-bottom">My Account</h1>
                    <form>
                        <label className="w3-padding" htmlFor="addStudent">Add Student by Username</label>
                        <input type="text" id="addStudent" value={this.state.addStudent} onChange={this.handleChange} />
                        <input className="w3-button w3-theme w3-margin" type="submit" value="Add Student" onClick={this.handleSubmit} />
                    </form>
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