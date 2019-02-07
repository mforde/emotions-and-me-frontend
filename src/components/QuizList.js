import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function QuizList(props) {
    return (
        <div className="quizList">
            <h3 className="w3-center w3-margin-bottom">Quizzes</h3>
            <>
                {props.quizzes.map(quiz => (
                    <div className="w3-row-padding w3-center" key={quiz.quizName}>
                        <div className="w3-theme w3-card w3-container w3-hover-shadow w3-hover-light-gray"
                             onClick={props.onClick(quiz.quizName)}>
                            <h4>{quiz.quizName}</h4>
                        </div>
                    </div>
                ))}
            </>
        </div>
    );
}

QuizList.propTypes = {
    quizzes: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default QuizList;