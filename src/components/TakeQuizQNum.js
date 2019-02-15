import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function QuestionNum(props) {
    return (
        <div className="questionNum w3-display-bottomright w3-padding-top">
            Question <span>{props.counter}</span> of <span>{props.total}</span>
        </div>
    );
}

QuestionNum.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default QuestionNum;