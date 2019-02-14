import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Question(props) {
    return (
        <h4 className="question w3-center">{props.content}</h4>
    );
}

Question.propTypes = {
    content: PropTypes.string.isRequired
};

export default Question;