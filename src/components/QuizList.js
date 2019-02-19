import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Link from "react-router-dom/es/Link";

function QuizList(props) {
    return (
        <div className="quizList">
            <h3 className="w3-center w3-margin-bottom">Quizzes</h3>
            <>
                {props.quizzes.assignments.map(quiz => (
                    <div className="w3-row-padding w3-center" key={quiz.quizName}>
                        <Link to={{pathname: '/takequiz', state: {quizName: quiz.quizName, quizData: quiz.quizData}}}>
                            <div className="w3-theme w3-card w3-container w3-hover-shadow w3-hover-light-gray">
                                <h4>{quiz.quizName}</h4>
                            </div>
                        </Link>
                    </div>
                ))}
            </>
        </div>
    );
}

QuizList.propTypes = {
    quizzes: PropTypes.array.isRequired,
};

export default QuizList;