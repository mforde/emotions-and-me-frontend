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
            answersCount: {
                false: 0,
                true: 0
            },
            result: '',
            quizData: ''
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.quizQuestions = this.getQuizData(this.props.location.state.quizName);
    }

    getQuizData(name) {
        let newData = [];

        let tempData =
            {
                "teacher": "testTeacher",
                "quizName": "Quiz 1",
                "questions": [
                    {
                        "Q": "Question 1",
                        "A": "Answer A",
                        "B": "Answer B",
                        "C": "Answer C",
                        "D": "Answer D",
                        "correct": "B"
                    },
                    {
                        "Q": "Question 2",
                        "A": "Answer A2",
                        "B": "Answer B2",
                        "C": "Answer C2",
                        "D": "Answer D2",
                        "correct": "D"
                    }
                ]
            };

        let idx = 0;
        tempData.questions.forEach(function(question) {
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
            idx = idx + 1;
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

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
        if (this.state.questionId < this.quizQuestions.length) {
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
            question: this.quizQuestions[counter].question,
            answerOptions: this.quizQuestions[counter].answers,
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
                    counter={this.state.counter}
                    question={this.state.question}
                    questionId={this.state.questionId}
                    questionTotal={this.quizQuestions.length}
                    onAnswerSelected={this.handleAnswerSelected}
                />
            </div>
        );
    }

    renderResult() {
        return (
            <Result quizResult={this.state.result} numCorrect={this.state.answersCount.true} numQuestions={this.quizQuestions.length}/>
        );
    }

    render() {
        return (this.state.result ? this.renderResult() : this.renderQuiz());
    }
}

export default TakeQuiz;