import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Question from './TakeQuizQuestion';
import QuestionNum from './TakeQuizQNum';
import QuizAnswers from "./TakeQuizAnswers";

function Quiz(props) {
    function renderAnswerOptions(key) {

        return (
            <div className="w3-group w3-card w3-padding w3-padding-24" key={key.content}>
                <QuizAnswers
                    key={key.content}
                    answerContent={key.content}
                    answerType={key.type}
                    answer={props.answer}
                    questionId={props.questionId}
                    onAnswerChange={props.onAnswerChange}
                    photo={key.photo}
                    audio={key.audio}
                 />
            </div>
        );
    }

    return (
        <div className="quiz w3-container w3-display-container">
            <Question
                content={props.question.content}
                photo={props.question.photo}
                audio={props.question.audio}
            />
            <ul className="answerOptions w3-margin-bottom-large w3-ul w3-hoverable">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
            <QuestionNum
                counter={props.questionId}
                total={props.questionTotal}
                onNext={props.onNextQ}
                onPrev={props.onPrevQ}
                showCorrect={props.showCorrect}
            />
        </div>
    );
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerChange: PropTypes.func.isRequired,
    onNextQ: PropTypes.func.isRequired,
    onPrevQ: PropTypes.func.isRequired,
    showCorrect: PropTypes.bool.isRequired,
};

export default Quiz;