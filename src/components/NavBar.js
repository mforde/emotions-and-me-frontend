import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {connect} from "react-redux";

class NavBar extends Component {
    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
        onClickLogin: PropTypes.func.isRequired,
        onClickSignup: PropTypes.func.isRequired,
        onClickSignout: PropTypes.func.isRequired,
    };

    featuresDropdown() {
        if (this.props.user.type === 'TEACHER') {
            return (
                <div className="w3-dropdown-hover">
                    <button className="w3-button w3-padding-16">
                        Features
                        <span className="caret"/>
                    </button>
                    <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                        <a href="/webcam" className="w3-bar-item w3-button">Emotions on Your Face</a>
                        <a href="/videostreaming" className="w3-bar-item w3-button">Emotions on Their Faces</a>
                        <a href="/recordaudio" className="w3-bar-item w3-button">Emotions in Your Voice</a>
                        <a href="/browse" className="w3-bar-item w3-button">Emotions in Photos & Audio</a>
                        <a href="/assignmentcreator" className="w3-bar-item w3-button">Assignment Creator</a>
                        <a href="/myassignments" className="w3-bar-item w3-button">My Assignments</a>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="w3-dropdown-hover">
                    <button className="w3-button w3-padding-16">
                        Features
                        <span className="caret"/>
                    </button>
                    <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                        <a href="/webcam" className="w3-bar-item w3-button">Emotions on Your Face</a>
                        <a href="/videostreaming" className="w3-bar-item w3-button">Emotions on Their Faces</a>
                        <a href="/recordaudio" className="w3-bar-item w3-button">Emotions in Your Voice</a>
                        <a href="/browse" className="w3-bar-item w3-button">Emotions in Photos & Audio</a>
                        <a href="/myassignments" className="w3-bar-item w3-button">My Assignments</a>
                    </div>
                </div>
            )
        }
    }

    howToButton() {
        return (
            <div className="w3-bar-item w3-button w3-padding-16">
                <a href="/howto">How-To Page</a>
            </div>
        )
    }

    myAccountButton() {
        return (
            <div className="w3-bar-item-right w3-button w3-padding-16">
                <a href="/myaccount">My Account</a>
            </div>
        )
    }

    signoutButton() {
        const { onClickSignout } = this.props;
        return (
            <div onClick={onClickSignout} className="w3-bar-item-right w3-button w3-padding-16">Sign Out</div>
        )
    }

    loginAndSignupButtons() {
        const { onClickSignup, onClickLogin } = this.props;
        return (
            <div>
                <div onClick={onClickSignup} className="w3-bar-item-right w3-button w3-padding-16">Sign Up</div>
                <div onClick={onClickLogin} className="w3-bar-item-right w3-button w3-padding-16">Login</div>
            </div>
        )
    }

    navigationBar() {
        const { isLoggedIn } = this.props;

        return (
            <div className="w3-bar w3-theme-dark">
                <a href="/" className="w3-bar-item w3-button w3-padding-16">Home</a>
                {isLoggedIn ? this.featuresDropdown() : null}
                {isLoggedIn ? this.howToButton() : null}
                {isLoggedIn ? this.signoutButton() : null}
                {isLoggedIn ? this.myAccountButton() : null}
                {isLoggedIn ? null : this.loginAndSignupButtons()}
            </div>
        )
    }

    render() {
        return (this.navigationBar());
    }
}

const mapStateToProps = state => {
    return {
        user: state.userInfo.user,
        userRequestStatus: state.userInfo.currentUserRequestStatus,
    }
};

export default connect(mapStateToProps, null) (NavBar);