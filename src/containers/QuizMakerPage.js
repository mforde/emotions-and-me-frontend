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
        questions: [<QuizQuestion key={1} number={1}/>]
    };

    render() {
        function quizMaker(questions, addQuestion, removeQuestion) {
            return (
                <div className="w3-container w3-margin">
                    <form>
                        <div className="questions" id="questions">
                            {questions}
                        </div>
                        <button type="button" className="w3-button w3-theme" id="addBtn" onClick={addQuestion}>Add Question</button>
                        <button type="button" className="w3-button w3-theme" id="removeBtn" onClick={removeQuestion}>Remove Question</button>
                        <StudentSelect/>
                        <button type="button" className="w3-button w3-theme w3-bar" id="btn">Save & Send Quiz</button>
                    </form>
                </div>
            );
        }

        return (
            quizMaker(this.state.questions, this.onAddQuestion, this.onRemoveQuestion)
        );
    }

    onAddQuestion = () => {
        let tempQ = this.state.questions;
        let tempNum = this.state.numQuestions + 1;
        tempQ.push(<QuizQuestion key={tempNum} number={tempNum}/>);

        this.setState({
            numQuestions: tempNum,
            questions: tempQ
        });
    };

    onRemoveQuestion = () => {
        let tempQ = this.state.questions;
        let newNum = this.state.numQuestions;

        if(this.state.numQuestions > 1) {
            tempQ.pop();
            newNum -= 1;
        }

        this.setState({
            numQuestions: newNum,
            questions: tempQ
        });
    }
}

export default QuizMakerPage;