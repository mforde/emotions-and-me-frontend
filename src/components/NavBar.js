import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class NavBar extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        onClickLogin: PropTypes.func.isRequired,
        onClickSignup: PropTypes.func.isRequired,
        onClickSignout: PropTypes.func.isRequired,
    }

    featuresDropdown() {
        return (
            <div className="w3-dropdown-hover">
                <button className="w3-button w3-padding-16 w3-animate-left">
                    Features
                </button>
                <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                    <a href="/webcam" className="w3-bar-item w3-button">Webcam</a>
                    <a href="/videostreaming" className="w3-bar-item w3-button">Video Streaming</a>
                    <a href="/recordaudio" className="w3-bar-item w3-button">Record Audio</a>
                    <a href="/browse" className="w3-bar-item w3-button">Browse Photos & Audio</a>
                    <a href="/assignmentcreator" className="w3-bar-item w3-button">Assignment Creator</a>
                    <a href="/myassignments" className="w3-bar-item w3-button">My Assignments</a>
                </div>
            </div>
        );
    }

    signoutButton() {        
        const { onClickSignout } = this.props;
        return (
            <div onClick={onClickSignout} className="w3-bar-item-right w3-button w3-padding-16 w3-animate-left">Sign Out</div>
        )
    }

    loginAndSignupButtons() {
        const { onClickSignup, onClickLogin } = this.props;
        return (
            <div>
                <div onClick={onClickSignup} className="w3-bar-item-right w3-button w3-padding-16 w3-animate-left">Sign Up</div>
                <div onClick={onClickLogin} className="w3-bar-item-right w3-button w3-padding-16 w3-animate-left">Login</div>
            </div>
        )
    }

    navigationBar() {
        const { isLoggedIn } = this.props;

        return (
            <div className="w3-bar w3-theme">
                <a href="/" className="w3-bar-item w3-button w3-padding-16 w3-animate-left">Home</a>
                {isLoggedIn ? this.featuresDropdown() : null}
                {isLoggedIn ? this.signoutButton() : null}
                {isLoggedIn ? null : this.loginAndSignupButtons()}
            </div>
        )
    }

    render() {
        return (this.navigationBar());
    }
}

export default NavBar;