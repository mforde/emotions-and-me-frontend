import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import emojis from "../constants/Emojis";

function Result(props) {

    if ((props.numCorrect / props.numQuestions) >= 0.5) {
        return (
            <div className="result w3-center w3-padding-64">
                <h2 className="w3-padding-large">Congratulations! You got <strong>{props.numCorrect}</strong> out
                    of {props.numQuestions} questions right!</h2>
                <div className="buttons">
                    <button className="w3-button w3-theme w3-margin w3-padding" onClick={() => window.location.reload()}>Try Again?</button>
                    <a href="/">
                        <button className="w3-button w3-theme w3-margin w3-padding">Go Home</button>
                    </a>
                </div>
                <img className="w3-image w3-center w3-padding-top" src={emojis.party} alt="party" height="50"
                     style={{width: '50%'}}/>
            </div>
        )
    } else {
        return (
            <div className="result w3-center w3-padding-64">
                <h2 className="w3-padding-large">You got <strong>{props.numCorrect}</strong> out
                    of {props.numQuestions} questions right!</h2>
                <div className="buttons">
                    <button className="w3-button w3-theme w3-margin w3-padding" onClick={() => window.location.reload()}>Try Again?</button>
                    <a href="/">
                        <button className="w3-button w3-theme w3-margin w3-padding">Go Home</button>
                    </a>
                </div>
            </div>
        )
    }
}

Result.propTypes = {
    numCorrect: PropTypes.number.isRequired,
    numQuestions: PropTypes.number.isRequired,
};

export default Result;