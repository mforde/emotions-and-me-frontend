import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Question from './TakeQuizQuestion';
import QuestionNum from './TakeQuizQNum';
import QuizAnswers from "./TakeQuizAnswers";

function Quiz(props) {
    function renderAnswerOptions(key) {
        return (
            <div className="w3-group w3-card w3-padding w3-padding-24">
                <QuizAnswers
                    key={key.content}
                    answerContent={key.content}
                    answerType={key.type}
                    answer={props.answer}
                    questionId={props.questionId}
                    onAnswerSelected={props.onAnswerSelected}
                />
            </div>
        );
    }

    return (
        <div className="quiz w3-container w3-display-container">
            <Question content={props.question} />
            <ul className="answerOptions w3-margin-bottom-large w3-ul w3-hoverable">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
            <QuestionNum
                counter={props.questionId}
                total={props.questionTotal}
            />
        </div>
    );
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;