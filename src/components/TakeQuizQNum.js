import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function QuestionNum(props) {

    function numOrCorrect() {
        if (props.showCorrect) {
            return (
                <div className="correct w3-display-middle w3-padding w3-card w3-theme w3-third w3-center">
                    CORRECT!
                </div>
            )
        }
        else {
            return (
                <div className="questionNum w3-display-bottommiddle w3-padding-top">
                    Question <span>{props.counter}</span> of <span>{props.total}</span>
                </div>
            )
        }
    }

    if (props.counter === 1) {
        return (
            <div className='w3-display-container'>
                {numOrCorrect()}
                <button className="w3-button w3-theme w3-display-right" onClick={props.onNext}>
                    Next <i className="arrow right"/>
                </button>
            </div>
        );
    }
    else if (props.counter === props.total) {
        return (
            <div className='w3-display-container'>
                <button className="w3-button w3-theme w3-display-left" onClick={props.onPrev}>
                    <i className="arrow left"/> Previous
                </button>
                {numOrCorrect()}
                <button className="w3-button w3-theme w3-display-right" onClick={props.onNext}>
                    Finish! <i className="arrow right"/>
                </button>
            </div>
        );
    }
    else {
        return (
            <div className='w3-display-container'>
                <button className="w3-button w3-theme w3-display-left" onClick={props.onPrev}>
                    <i className="arrow left"/> Previous
                </button>
                {numOrCorrect()}
                <button className="w3-button w3-theme w3-display-right" onClick={props.onNext}>
                    Next <i className="arrow right"/>
                </button>
            </div>
        );
    }
}

QuestionNum.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    showCorrect: PropTypes.bool.isRequired,
};

export default QuestionNum;