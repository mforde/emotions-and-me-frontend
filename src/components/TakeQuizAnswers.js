import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function QuizAnswers(props) {
    return (
        <li className="answerOption">
            <label className="w3-padding w3-large">
                <input
                    type="radio"
                    className="w3-radio w3-padding"
                    name="radioGroup"
                    checked={props.answerType.toString() === props.answer}
                    id={props.answerType.toString()}
                    value={props.answerType}
                    disabled={props.answer}
                    onChange={props.onAnswerSelected}
                />{' '}
                {props.answerContent}
            </label>
        </li>
    );
}

QuizAnswers.propTypes = {
    answerType: PropTypes.bool.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default QuizAnswers;
