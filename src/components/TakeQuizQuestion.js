import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Question(props) {
    if ('url' in props.photo) {
        return (
            <div className="w3-container">
                <div className="w3-card">
                    <img src={props.photo.url} alt={props.photo.label}/>
                </div>
                <h4 className="question w3-center">{props.content}</h4>
            </div>
        );
    }

    if ('url' in props.audio) {
        return (
            <div className="w3-container">
                <div className="w3-card">
                    <audio controls>
                        <source src={props.audio.url} type="audio/wav" id={props.audio.label}/>
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <h4 className="question w3-center">{props.content}</h4>
            </div>
        );
    }

    return (
        <h4 className="question w3-center">{props.content}</h4>
    );
}

Question.propTypes = {
    content: PropTypes.string.isRequired,
    photo: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
};

export default Question;