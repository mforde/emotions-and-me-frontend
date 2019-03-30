import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

class Signup extends Component {
    static propTypes = {
        showModal: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        handleSignupAttempt: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            account_type: '',
            email: '',
            first_name: '',
            last_name: ''
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = {...prevstate};
            newState[name] = value;
            return newState;
        });
    };
    
    render() {
        const { showModal, handleClose, handleSignupAttempt } = this.props;

        return (
            <div>
                <Modal show={showModal} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Sign up for an account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="w3-container" onSubmit={e => handleSignupAttempt(e, this.state)} >
                            <p>
                                <label htmlFor="account_type">Account Type:</label>
                                <br/>
                                <span>
                                    <input className="w3-radio" type="radio" name="account_type" value="STUDENT" onChange={this.handleChange} required />
                                    &nbsp;Student
                                </span>
                                <br/>
                                <span>
                                    <input className="w3-radio" type="radio" name="account_type" value="TEACHER" onChange={this.handleChange} required />
                                    &nbsp;Teacher
                                </span>
                            </p>
                            <p>
                                <label htmlFor="first_name">First Name</label>
                                <input className="w3-input w3-border" type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} required />
                            </p>
                            <p>
                                <label htmlFor="last_name">Last Name</label>
                                <input className="w3-input w3-border" type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} required />
                            </p>
                            <p>
                                <label htmlFor="email">Email</label>
                                <input className="w3-input w3-border" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                            </p>
                            <p>
                                <label htmlFor="username">Username</label>
                                <input className="w3-input w3-border" type="text" name="username" value={this.state.username} onChange={this.handleChange} required/>
                            </p>
                            <p>
                                <label htmlFor="password">Password</label>
                                <input className="w3-input w3-border" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
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