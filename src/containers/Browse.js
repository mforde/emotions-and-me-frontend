import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Browse extends Component {
    render() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">Emotions in Faces and Voices</h1>
                <div className="browse w3-centered w3-container w3-margin">
                    <Link to={"/picturelist"} style={{textDecoration: 'none'}}>
                        <div
                            className="w3-theme w3-card w3-padding w3-hover-shadow w3-hover-light-gray w3-margin">
                            <h3 className="w3-center">Picture</h3>
                        </div>
                    </Link>
                    <Link to={"/audiolist"} style={{textDecoration: 'none'}}>
                        <div
                            className="w3-theme w3-card w3-padding w3-hover-shadow w3-hover-light-gray w3-margin">
                            <h3 className="w3-center">Audio</h3>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}


