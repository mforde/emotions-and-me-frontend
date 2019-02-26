import React, { Component } from 'react';
import '../App.css';
import Quiz from "../components/TakeQuiz";
import Result from "../components/QuizResults";

class TakeQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quizName: this.props.location.state.quizName,
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answersCount: {},
            result: '',
            quizData: this.props.location.state.quizData
        };

        this.handleNextQuestion = this.handleNextQuestion.bind(this);
        this.handlePrevQuestion = this.handlePrevQuestion.bind(this);
        this.setUserAnswer = this.setUserAnswer.bind(this);
        this.quizQuestions = this.getQuizData(this.props.location.state.quizData);
    }

    getQuizData(data) {
        let newData = [];

        data.forEach(function(question) {
            let correct = question.correct;
            let A = false;
            let B = false;
            let C = false;
            let D = false;

            if (correct === "A") {
                A = true;
            }
            if (correct === "B") {
                B = true;
            }
            if (correct === "C") {
                C = true;
            }
            if (correct === "D") {
                D = true;
            }

            let newQ = {
                question: question.Q,
                answers: [
                    {
                        type: A,
                        content: question.A
                    },
                    {
                        type: B,
                        content: question.B
                    },
                    {
                        type: C,
                        content: question.C
                    },
                    {
                        type: D,
                        content: question.D
                    },
                ]
            };
            newData.push(newQ);
        });

        return newData;
    }

    componentWillMount() {
        const shuffledAnswerOptions = this.quizQuestions.map((question) => TakeQuiz.shuffleArray(question.answers));

        this.setState({
            question: this.quizQuestions[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
    }

    static shuffleArray(array) {
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

    handleNextQuestion() {
        if (this.state.questionId < this.quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }

    handlePrevQuestion() {
        setTimeout(() => this.setPrevQuestion(), 300);
    }

    setUserAnswer(event) {
        let answer = event.currentTarget.value;
        this.setState((state) => ({
            answersCount: {
                ...state.answersCount,
                [state.questionId]: answer,
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
            question: this.quizQuestions[counter].question,
            answerOptions: this.quizQuestions[counter].answers,
            answer: ''
        });
    }

    setPrevQuestion() {
        const counter = this.state.counter - 1;
        const questionId = this.state.questionId - 1;
        this.setState({
            counter: counter,
            questionId: questionId,
            question: this.quizQuestions[counter].question,
            answerOptions: this.quizQuestions[counter].answers,
            answer: ''
        });
    }

    getResults() {
        let result = 0;
        const answersCount = this.state.answersCount;
        const answersCountValues = Object.keys(answersCount).map((key) => answersCount[key]);
        answersCountValues.forEach( function(value) {
            if (value === "true") {
                result = result + 1;
            }
        });
        return result;
    }

    setResults (result) {
        this.setState({
            result: result,
        });
    }

    renderQuiz() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">{this.state.quizName}</h1>
                <Quiz
                    answer={this.state.answer}
                    answerOptions={this.state.answerOptions}
                    counter={this.state.counter}
                    question={this.state.question}
                    questionId={this.state.questionId}
                    questionTotal={this.quizQuestions.length}
                    onAnswerChange={this.setUserAnswer}
                    onNextQ={this.handleNextQuestion}
                    onPrevQ={this.handlePrevQuestion}
                />
            </div>
        );
    }

    renderResult() {
        return (
            <Result numCorrect={this.state.result} numQuestions={this.quizQuestions.length}/>
        );
    }

    render() {
        return (this.state.result ? this.renderResult() : this.renderQuiz());
    }
}

export default TakeQuiz;