import React, { Component } from 'react';
import '../App.css';


class QuizQuestion extends Component {
    constructor(props) {
        super(props);

        this.handleQChange = this.handleQChange.bind(this);
        this.handleAChange = this.handleAChange.bind(this);
        this.numQ = props.number;
        this.label = props.label;

        this.state = {
            "question": {
                "text": "",
                "photoLink": "",
                "audioLink": ""
            },
            "answerA": {
                "text": "",
                "photoLink": "",
                "audioLink": ""
            },
            "answerB": {
                "text": "",
                "photoLink": "",
                "audioLink": ""
            },
            "answerC": {
                "text": "",
                "photoLink": "",
                "audioLink": ""
            },
            "answerD": {
                "text": "",
                "photoLink": "",
                "audioLink": ""
            },
            "correct": "",
        }
    }

    handleQChange(e) {
        const {id, value} = e.target;

        this.setState({
            "question": {
                [id]: value
            }
        });
        const text = this.state;
        this.props.onChange(this.label, text);
    }

    handleAChange(e) {
        const {id, name, value} = e.target;

        this.setState({
            [id]: {
                [name]: value
            }
        });
        alert(JSON.stringify(this.state));
        const text = this.state;
        this.props.onChange(this.label, text);
    }

    render() {

        function answer(label, num, state, change) {
            return (
                <div className={label + num + " w3-padding-top"}>
                    <label htmlFor={label + num}>{"Answer " + label + ":"}</label>
                    <div className="w3-container w3-right">
                        <button type="button" className="w3-button" id={"photo" + label + num}>Add Photo</button>
                        <button type="button" className="w3-button" id={"audio" + label + num}>Add Audio</button>
                    </div>
                    <input type={label + num} className="form-control w3-bar" id={"answer" + label} name="text" onChange={change}/>
                </div>
            );
        }

        return (
            <div className={"question" + this.numQ + " w3-group w3-card w3-padding w3-padding-24"}>
                <div className={"Q" + this.numQ}>
                    <label htmlFor={"question" + this.numQ}>Question {this.numQ}:</label>
                    <div className="w3-container w3-right">
                        <button type="button" className="w3-button" id={"photoQ" + this.numQ} value={this.state.question.photoLink}>Add Photo</button>
                        <button type="button" className="w3-button" id={"audioQ" + this.numQ} value={this.state.question.audioLink}>Add Audio</button>
                    </div>
                    <input name={"question" + this.numQ} id={"text"} className="form-control w3-bar" value={this.state.question.text} onChange={this.handleQChange}/>
                </div>
                {answer("A", this.numQ, this.state.answers, this.handleAChange)}
                {answer("B", this.numQ, this.state.answers, this.handleAChange)}
                {answer("C", this.numQ, this.state.answers, this.handleAChange)}
                {answer("D", this.numQ, this.state.answers, this.handleAChange)}
                <div className="w3-padding-top">
                    <label htmlFor={"radios" + this.numQ}>Correct Answer:</label>
                    <div className="radio-inline" id={"radios" + this.numQ} value={this.state.correct} onChange={this.handleChange}>
                        <label htmlFor={"radioA"+this.numQ} className="radio-inline w3-padding">
                            <input type="radio" className="w3-radio w3-padding" name={"answer" + this.numQ} value={"A" + this.numQ} id={"radioA" + this.numQ}/>A
                        </label>
                        <label htmlFor={"radioB"+this.numQ} className="radio-inline w3-padding">
                            <input type="radio" className="w3-radio w3-padding" name={"answer" + this.numQ} value={"B" + this.numQ} id={"radioB" + this.numQ}/>B
                        </label>
                        <label htmlFor={"radioC"+this.numQ} className="radio-inline w3-padding">
                            <input type="radio" className="w3-radio w3-padding" name={"answer" + this.numQ} value={"C" + this.numQ} id={"radioC" + this.numQ}/>C
                        </label>
                        <label htmlFor={"radioD"+this.numQ} className="radio-inline w3-padding">
                            <input type="radio" className="w3-radio w3-padding" name={"answer" + this.numQ} value={"D" + this.numQ} id={"radioD" + this.numQ}/>D
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizQuestion;