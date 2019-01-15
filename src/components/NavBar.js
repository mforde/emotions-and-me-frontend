import React, { Component } from 'react';
import '../App.css';

class NavBar extends Component {

    navigationBar() {
        return (
            <div className="w3-bar w3-theme">
                <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-animate-left">Home</a>
                <div className="w3-dropdown-hover">
                    <button className="w3-button w3-padding-16 w3-animate-left">
                        Features
                    </button>
                    <div className="w3-dropdown-content w3-card-4 w3-bar-block">
                        <a href="javascript:void(0)" className="w3-bar-item w3-button">Webcam</a>
                        <a href="javascript:void(0)" className="w3-bar-item w3-button">Video Streaming</a>
                        <a href="javascript:void(0)" className="w3-bar-item w3-button">Record Audio</a>
                        <a href="javascript:void(0)" className="w3-bar-item w3-button">Browse Photos & Audio</a>
                        <a href="javascript:void(0)" className="w3-bar-item w3-button">Assignment Creator</a>
                        <a href="javascript:void(0)" className="w3-bar-item w3-button">My Assignments</a>
                    </div>
                </div>
                <a href="#" className="w3-bar-item-right w3-button w3-padding-16 w3-animate-left">Sign Up</a>
                <a href="#" className="w3-bar-item-right w3-button w3-padding-16 w3-animate-left">Login</a>
            </div>
        )
    }

    render() {
        return (this.navigationBar());
    }
}

export default NavBar;