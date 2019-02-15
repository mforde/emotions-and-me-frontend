import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import '../../App.css';

class Login extends Component {
    static propTypes = {
        showModal: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        handleLoginAttempt: PropTypes.func.isRequired,
        hasFailed: PropTypes.bool.isRequired,
    };
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };

    render() {
        const { showModal, handleClose, handleLoginAttempt, hasFailed } = this.props;

        let modalBody;
        if (hasFailed) {
            modalBody = "Something went wrong. Please try again."
        } else {
            modalBody =  
            <form className="w3-container" onSubmit={e => handleLoginAttempt(e, this.state)} >
                <p>
                    <label htmlFor="username">Username</label>
                    <input className="w3-input w3-border" type="username" name="username" value={this.state.username} onChange={this.handleChange} required />
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input className="w3-input w3-border" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                </p>
                <p>
                    <button className="w3-btn w3-green" >
                        Login
                    </button>
                </p>
            </form> 
        }

        return (
            <div>
                <Modal show={showModal} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Login to your account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {modalBody}
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

}

export default Login;