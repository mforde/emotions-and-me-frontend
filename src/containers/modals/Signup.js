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
                        <form className="w3-container" onSubmit={e => handleSignupAttempt(e)} >
                            <p>
                                <label htmlFor="account_type">Account Type:</label>
                                <br/>
                                <span>
                                    <input className="w3-radio" type="radio" name="account_type" value="student" required />
                                    &nbsp;Student
                                </span>
                                <br/>
                                <span>
                                    <input className="w3-radio" type="radio" name="account_type" value="teacher" required />
                                    &nbsp;Teacher
                                </span>
                            </p>
                            <p>
                                <label htmlFor="first_name">First Name</label>
                                <input className="w3-input w3-border" type="text" name="first_name" required />
                            </p>
                            <p>
                                <label htmlFor="last_name">Last Name</label>
                                <input className="w3-input w3-border" type="text" name="last_name" required />
                            </p>
                            <p>
                                <label htmlFor="email">Email</label>
                                <input className="w3-input w3-border" type="email" name="email" required />
                            </p>
                            <p>
                                <label htmlFor="password">Password</label>
                                <input className="w3-input w3-border" type="password" name="password" required />
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