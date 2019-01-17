import React, { Component } from 'react';
import '../App.css';

class QuizQuestion extends Component {
    constructor(props) {
        super(props);

        this.numQ = props.number;
    }

    render() {
        return (
            <div className={"question" + this.numQ + "-group w3-card w3-padding w3-padding-24"}>
                <label htmlFor={"question" + this.numQ}>Question {this.numQ}:</label>
                <input type={"question" + this.numQ} className="form-control" id={"question" + this.numQ}/>
                <label htmlFor={"A" + this.numQ}>Answer A:</label>
                <input type={"A" + this.numQ} className="form-control" id={"A" + this.numQ}/>
                <label htmlFor={"B" + this.numQ}>Answer B:</label>
                <input type={"B" + this.numQ} className="form-control" id={"B" + this.numQ}/>
                <label htmlFor={"C" + this.numQ}>Answer C:</label>
                <input type={"C" + this.numQ} className="form-control" id={"C" + this.numQ}/>
                <label htmlFor={"D" + this.numQ}>Answer D:</label>
                <input type={"D" + this.numQ} className="form-control" id={"D" + this.numQ}/>
                <label htmlFor={"radios" + this.numQ}>Correct Answer:</label>
                <div className="radio-inline" id={"radios" + this.numQ}>
                    <label className="radio-inline">
                        <input type="radio" className="radio-inline w3-radio" name={"answer" + this.numQ} value={"A" + this.numQ} id={"radioA" + this.numQ}/>A
                    </label>
                    <label className="radio-inline">
                        <input type="radio" className="radio-inline w3-radio" name={"answer" + this.numQ} value={"B" + this.numQ} id={"radioB" + this.numQ}/>B
                    </label>
                    <label className="radio-inline">
                        <input type="radio" className="radio-inline w3-radio" name={"answer" + this.numQ} value={"C" + this.numQ} id={"radioC" + this.numQ}/>C
                    </label>
                    <label className="radio-inline">
                        <input type="radio" className="radio-inline w3-radio" name={"answer" + this.numQ} value={"D" + this.numQ} id={"radioD" + this.numQ}/>D
                    </label>
                </div>
            </div>
        );
    }
}

export default QuizQuestion;