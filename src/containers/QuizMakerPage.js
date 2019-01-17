import React, { Component } from 'react';
import '../App.css';
import QuizQuestion from "../components/QuizQuestion"
import QuizMaker from "../components/QuizMaker"

class QuizMakerPage extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        numQuestions: 1,
        questions: [(<QuizQuestion key={1} number={1} />)]
    }

    render() {
        return (
            <QuizMaker questions={this.state.questions} addQuestion={this.onAddQuestion}>
            </QuizMaker>
        );
    }

    onAddQuestion = () => {
        this.setState({
            numQuestions: this.state.numQuestions + 1,
            questions: [this.state.questions, <QuizQuestion key={this.state.numQuestions + 1} number={this.state.numQuestions + 1} />]
            });
    }
}

const QuizMaker1 = props => {
    return (
        <div className="w3-container w3-margin">
            <form id="form-class">
                <div className="form-group w3-container">
                    <div className="questions" id="questions">
                        {props.questions}
                    </div>
                </div>
                <button type="button" className="w3-button" id="btn">Submit</button>
                <button type="button" className="w3-button" id="addBtn" onClick={props.addQuestion}>Add Question</button>
            </form>
        </div>
    );
}


export default QuizMakerPage;