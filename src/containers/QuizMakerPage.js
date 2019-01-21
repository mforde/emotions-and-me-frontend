import React, { Component } from 'react';
import '../App.css';
import QuizQuestion from "../components/QuizQuestion"
import StudentSelect from "../components/StudentSelect";

class QuizMakerPage extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        numQuestions: 1,
    };

    render() {
        function quizMaker(questions, addQuestion, removeQuestion) {
            return (
                <div className="w3-container w3-margin">
                    <form>
                        <div className="questions" id="questions">
                            {questions}
                        </div>
                        <button type="button" className="w3-button" id="addBtn" onClick={addQuestion}>Add Question</button>
                        <button type="button" className="w3-button" id="removeBtn" onClick={removeQuestion}>Remove Question</button>
                        <StudentSelect/>
                        <button type="button" className="w3-button w3-bar" id="btn">Save & Send Quiz</button>
                    </form>
                </div>
            );
        }

        function questionList(num) {
            const questions = [];
            for (let i = 1; i <= num; i++) {
                questions.push(<QuizQuestion key={i} number={i} />)
            }

            return questions;
        }

        return (
            quizMaker(questionList(this.state.numQuestions), this.onAddQuestion, this.onRemoveQuestion)
        );
    }

    onAddQuestion = () => {
        this.setState({
            numQuestions: this.state.numQuestions + 1,
        });
    };

    onRemoveQuestion = () => {
        let newNum = this.state.numQuestions;
        if(this.state.numQuestions > 1) {
            newNum -= 1;
        }

        this.setState({
            numQuestions: newNum,
        });
    }
}

export default QuizMakerPage;