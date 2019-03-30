import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function AddStudentTeacher(props) {

    function studentTeacherList() {
        if (props.accountType === 'TEACHER') {
            return (
                <div>
                    <div className="w3-large w3-padding">
                        <b>Students:</b>
                        {nameList()}
                    </div>
                    <form>
                        <label className="w3-large w3-padding-large" htmlFor="addStudent">Add New Student by
                            Username</label>
                        <input type="text" id="addStudent" onChange={props.handleChange}/>
                        <input className="w3-button w3-theme w3-margin" type="submit" value="Add Student"
                               onClick={props.handleSubmit}/>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="w3-large w3-padding">
                    <b>Teacher:</b>
                    {nameList()}
                </div>
            )
        }
    }

    function nameList() {
        if (props.hasFailed) {
            return (
                <div>
                    <div className="w3-large w3-margin-left">
                        Failed to Load Account Information.
                    </div>
                </div>
            )
        }
        else if (props.isFetching || props.accountList === null) {
            return (
                <div>
                    <div className="w3-large w3-margin-left">
                        Loading Accounts...
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    {props.accountList.map(account => (
                        <div className="w3-large w3-margin-left" key={account.value}>
                            <span className="w3-half w3-left-align"><b>Name:</b> {account.label}</span>
                            <span className="w3-half w3-left-align"><b>Username:</b> {account.value}</span>
                        </div>
                    ))}
                </div>
            )
        }
    }

    return (
        <div className="w3-container w3-display-container">
            <div className="w3-large w3-padding">
                <b>Username:</b> {props.username}
            </div>
            <div className="w3-large w3-padding">
                <b>Name:</b> {props.firstName} {props.lastName}
            </div>
            <div className="w3-large w3-padding">
                <b>Email:</b> {props.email}
            </div>
            <div className="w3-large w3-padding">
                <b>Account Type:</b> {props.accountType}
            </div>
            {studentTeacherList()}
        </div>
    );
}

AddStudentTeacher.propTypes = {
    username: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    accountType: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    accountList: PropTypes.array.isRequired,
    hasFailed: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
};

export default AddStudentTeacher;