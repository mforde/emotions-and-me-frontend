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
                    checked={props.answerType === props.answer}
                    id={props.answerType}
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
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default QuizAnswers;
