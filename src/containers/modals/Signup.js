import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

class Signup extends Component {
    static propTypes = {
        showModal: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        handleSignupAttempt: PropTypes.func.isRequired,
    }
    
    render() {
        const { showModal, handleClose, handleSignupAttempt } = this.props;

        return (
            <div>
                <Modal show={showModal} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Sign up for an account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="w3-container" onSubmit={() => handleSignupAttempt()} >
                            <p>
                                <label>Account Type:</label>
                                <br/>
                                <span>
                                    <input className="w3-radio" type="radio" name="account_type" value="student"/>
                                    &nbsp;Student
                                </span>
                                <br/>
                                <span>
                                    <input className="w3-radio" type="radio" name="account_type" value="teacher"/>
                                    &nbsp;Teacher
                                </span>
                            </p>
                            <p>
                                <label>First Name</label>
                                <input className="w3-input w3-border" type="text" name="first_name" />
                            </p>
                            <p>
                                <label>Last Name</label>
                                <input className="w3-input w3-border" type="text" name="last_name" />
                            </p>
                            <p>
                                <label>Email</label>
                                <input className="w3-input w3-border" type="email" name="email" />
                            </p>
                            <p>
                                <label>Password</label>
                                <input className="w3-input w3-border" type="password" name="password" />
                            </p>
                            <p>
                                <input className="w3-btn w3-green" type="submit" value="Sign Up" />
                            </p>
                        </form> 
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

}

export default Signup;