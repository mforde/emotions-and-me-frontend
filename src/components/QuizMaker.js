import React, { Component } from 'react';
import '../App.css';

class QuizMaker extends Component {
    constructor(props) {
        super(props);

        this.question = props.questions;
        this.addQ = props.addQuestion;
    }

    render() {
        return (
            <div className="w3-container w3-margin">
                <form id="form-class">
                    <div className="form-group w3-container">
                        <div className="questions" id="questions">
                            {this.question}
                        </div>
                    </div>
                    <button type="button" className="w3-button" id="btn">Submit</button>
                    <button type="button" className="w3-button" id="addBtn" onClick={this.addQ}>Add Question
                    </button>
                </form>
            </div>
        );
    }
}

export default QuizMaker;