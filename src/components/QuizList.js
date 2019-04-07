import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Link from "react-router-dom/es/Link";

function QuizList(props) {
    return (
        <div className="quizList">
            <h3 className="w3-center w3-margin-bottom">Quizzes</h3>
            <>
                {props.quizzes.map(quiz => (
                    <div className="w3-row-padding w3-center w3-display-container" key={quiz.quizName}>
                        <Link to={{pathname: '/takequiz', state: {quizName: quiz.quizName, quizData: quiz.quizData}}}
                              style={{textDecoration: 'none'}}>
                            <div className="w3-theme w3-card w3-container w3-hover-shadow w3-hover-light-gray w3-threequarter">
                                <h4>{quiz.quizName}</h4>
                            </div>
                        </Link>
                        <div className="w3-display-right w3-quarter">
                            <button type="button" className="w3-button w3-hover-red" onClick={() => props.remove(quiz.quizName)}>Remove Quiz</button>
                        </div>
                    </div>
                ))}
            </>
        </div>
    );
}

QuizList.propTypes = {
    quizzes: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired
};

export default QuizList;