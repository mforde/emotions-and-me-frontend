import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';

class NavBar extends Component {

    navigationBar() {
        return (
            <div className="w3-bar w3-theme">
                <a href="/" className="w3-bar-item w3-button w3-padding-16">Home</a>
                <div className="w3-dropdown-hover">
                    <button className="w3-button w3-padding-16">
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
                <a href="/signup" className="w3-bar-item-right w3-button w3-padding-16">Sign Up</a>
                <a href="/login"  className="w3-bar-item-right w3-button w3-padding-16">Login</a>
            </div>
        )
    }

    render() {
        return (this.navigationBar());
    }
}

export default NavBar;