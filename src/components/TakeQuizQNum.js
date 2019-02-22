import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function QuestionNum(props) {
    if (props.counter === 1) {
        return (
            <div className='w3-display-container'>
                <div className="questionNum w3-display-bottommiddle w3-padding-top">
                    Question <span>{props.counter}</span> of <span>{props.total}</span>
                </div>
                <button className="w3-button w3-theme w3-display-right" onClick={props.onNext}>Next</button>
            </div>
        );
    }
    else if (props.counter === props.total) {
        return (
            <div className='w3-display-container'>
                <button className="w3-button w3-theme w3-display-left" onClick={props.onPrev}>Previous</button>
                <div className="questionNum w3-display-bottommiddle w3-padding-top">
                    Question <span>{props.counter}</span> of <span>{props.total}</span>
                </div>
                <button className="w3-button w3-theme w3-display-right" onClick={props.onNext}>Finish!</button>
            </div>
        );
    }
    else {
        return (
            <div className='w3-display-container'>
                <button className="w3-button w3-theme w3-display-left" onClick={props.onPrev}>Previous</button>
                <div className="questionNum w3-display-bottommiddle w3-padding-top">
                    Question <span>{props.counter}</span> of <span>{props.total}</span>
                </div>
                <button className="w3-button w3-theme w3-display-right" onClick={props.onNext}>Next</button>
            </div>
        );
    }
}

QuestionNum.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired
};

export default QuestionNum;