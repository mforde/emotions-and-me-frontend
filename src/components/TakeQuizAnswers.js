import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function QuizAnswers(props) {
    if ('url' in props.photo) {
        return (
            <div className="w3-container">
                <li className="answerOption">
                    <label className="w3-padding w3-large">
                        <input
                            type="radio"
                            className="w3-radio w3-padding"
                            name="radioGroup"
                            id={props.answerType.toString()}
                            value={props.answerType}
                            onChange={props.onAnswerChange}
                        />{' '}
                        {props.answerContent}
                    </label>
                    <img
                        className="w3-image w3-card w3-margin-left"
                        src={props.photo.url}
                        alt={props.photo.label}
                        height="250"
                        style={{width: '50%'}}
                    />
                </li>
            </div>
        );
    }

    if ('url' in props.audio) {
        return (
            <div className="w3-container">
                <li className="answerOption">
                    <label className="w3-padding w3-large">
                        <input
                            type="radio"
                            className="w3-radio w3-padding"
                            name="radioGroup"
                            id={props.answerType.toString()}
                            value={props.answerType}
                            onChange={props.onAnswerChange}
                        />{' '}
                        {props.answerContent}
                    </label>
                    <div className="w3-center">
                        <audio controls>
                            <source src={props.audio.url} type="audio/wav" id={props.audio.label}/>
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </li>
            </div>
        );
    }

    return (
        <li className="answerOption">
            <label className="w3-padding w3-large">
                <input
                    type="radio"
                    className="w3-radio w3-padding"
                    name="radioGroup"
                    id={props.answerType.toString()}
                    value={props.answerType}
                    onChange={props.onAnswerChange}
                />{' '}
                {props.answerContent}
            </label>
        </li>
    );
}

QuizAnswers.propTypes = {
    answerType: PropTypes.bool.isRequired,
    answerContent: PropTypes.string.isRequired,
    photo: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerChange: PropTypes.func.isRequired
};

export default QuizAnswers;
