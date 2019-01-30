import React, { Component } from 'react';
import '../App.css';
import quizQuestions from "../components/tempQuizData";
import Quiz from "../components/TakeQuiz";
import Result from "../components/QuizResults";

class TestQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quizName: "Quiz 1",
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answersCount: {
                false: 0,
                true: 0
            },
            result: '',
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentWillMount() {
        const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));

        this.setState({
            question: quizQuestions[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
    }

    shuffleArray(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }

    setUserAnswer(answer) {
        this.setState((state) => ({
            answersCount: {
                ...state.answersCount,
                [answer]: state.answersCount[answer] + 1
            },
            answer: answer
        }));
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: ''
        });
    }

    getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);

        return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
    }

    setResults (result) {
        if (result.length === 1) {
            this.setState({ result: result[0] });
        } else {
            this.setState({ result: 'Undetermined' });
        }
    }

    renderQuiz() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">{this.state.quizName}</h1>
                <Quiz
                    answer={this.state.answer}
                    answerOptions={this.state.answerOptions}
                    question={this.state.question}
                    questionId={this.state.questionId}
                    questionTotal={quizQuestions.length}
                    onAnswerSelected={this.handleAnswerSelected}
                />
            </div>
        );
    }

    renderResult() {
        return (
            <Result quizResult={this.state.result} numCorrect={this.state.answersCount.true} numQuestions={quizQuestions.length}/>
        );
    }

    render() {
        return (this.state.result ? this.renderResult() : this.renderQuiz());
    }
}

export default TestQuiz;