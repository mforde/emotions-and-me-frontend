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
            quizData: this.props.location.state.quizData,
            showCorrect: false,
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

            let photos = question.photos;
            let photoQ = {};
            let photoA = {};
            let photoB = {};
            let photoC = {};
            let photoD = {};
            let audio = question.audio;
            let audioQ = {};
            let audioA = {};
            let audioB = {};
            let audioC = {};
            let audioD = {};

            if ('Q' in photos) {
                photoQ = photos.Q;
            }
            if ('A' in photos) {
                photoA = photos.A;
            }
            if ('B' in photos) {
                photoB = photos.B;
            }
            if ('C' in photos) {
                photoC = photos.C;
            }
            if ('D' in photos) {
                photoD = photos.D;
            }


            if ('Q' in audio) {
                audioQ = audio.Q;
            }
            if ('A' in audio) {
                audioA = audio.A;
            }
            if ('B' in audio) {
                audioB = audio.B;
            }
            if ('C' in audio) {
                audioC = audio.C;
            }
            if ('D' in audio) {
                audioD = audio.D;
            }

            let newQ = {
                question: {
                    content: question.Q,
                    photo: photoQ,
                    audio: audioQ,
                },
                answers: [
                    {
                        type: A,
                        content: question.A,
                        photo: photoA,
                        audio: audioA,
                    },
                    {
                        type: B,
                        content: question.B,
                        photo: photoB,
                        audio: audioB,
                    },
                    {
                        type: C,
                        content: question.C,
                        photo: photoC,
                        audio: audioC,
                    },
                    {
                        type: D,
                        content: question.D,
                        photo: photoD,
                        audio: audioD,
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


    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((prevState.showCorrect !== this.state.showCorrect) && this.state.showCorrect) {

            if (this.state.questionId < this.quizQuestions.length) {
                setTimeout(() => this.setNextQuestion(), 1000);
            } else {
                setTimeout(() => this.setResults(this.getResults()), 1000);
            }
        }
    }

    handleNextQuestion() {
        if (this.state.answer === "true") {
            this.setState({
                showCorrect: true,
            })
        } else {
            if (this.state.questionId < this.quizQuestions.length) {
                setTimeout(() => this.setNextQuestion(), 1000);
            } else {
                setTimeout(() => this.setResults(this.getResults()), 1000);
            }
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
            answer: '',
            showCorrect: false
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
            answer: '',
            showCorrect: false
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
                    showCorrect={this.state.showCorrect}
                />
            </div>
        );
    }

    renderResult() {
        if (this.props.location.state !== undefined) {
            if (this.props.location.state.isTLTask === true) {
                return (
                    <Result
                        numCorrect={this.state.result}
                        numQuestions={this.quizQuestions.length}
                        tasklistName={this.props.location.state.tasklistName}
                        tasklistData={this.props.location.state.tasklistData}
                    />
                )
            }
        }

        return (
            <Result
                numCorrect={this.state.result}
                numQuestions={this.quizQuestions.length}
                tasklistName=""
                tasklistData={null}
            />
        );
    }

    render() {
        return (this.state.result ? this.renderResult() : this.renderQuiz());
    }
}

export default TakeQuiz;