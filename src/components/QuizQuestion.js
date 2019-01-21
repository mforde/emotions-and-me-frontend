import React, { Component } from 'react';
import '../App.css';
import FormGroup from "../containers/QuizMakerPage";


class QuizQuestion extends Component {
    constructor(props) {
        super(props);

        this.numQ = props.number;
    }

    render() {

        function answer(label, num) {
            /*return (
                <div className={label + num}>
                    <FieldGroup
                        id={label + num}
                        type={label + num}
                        label={"Answer " + label + ":"}
                    />
                </div>
            );*/
            return (
                <div className={label + num + " w3-padding-top"}>
                    <label htmlFor={label + num}>{"Answer " + label + ":"}</label>
                    <div className="w3-container w3-right">
                        <button type="button" className="w3-button" id={"photo" + label + num}>Add Photo</button>
                        <button type="button" className="w3-button" id={"audio" + label + num}>Add Audio</button>
                    </div>
                    <input type={label + num} className="form-control w3-bar" id={label + num}/>
                </div>
            );
        }

        return (
            <div className={"question" + this.numQ + " w3-group w3-card w3-padding w3-padding-24"}>
                <div className={"Q" + this.numQ}>
                    <label htmlFor={"question" + this.numQ}>Question {this.numQ}:</label>
                    <div className="w3-container w3-right">
                        <button type="button" className="w3-button" id={"photoQ" + this.numQ}>Add Photo</button>
                        <button type="button" className="w3-button" id={"audioQ" + this.numQ}>Add Audio</button>
                    </div>
                    <input type={"question" + this.numQ} className="form-control w3-bar" id={"question" + this.numQ}/>
                </div>
                {answer("A", this.numQ)}
                {answer("B", this.numQ)}
                {answer("C", this.numQ)}
                {answer("D", this.numQ)}
                <div className="w3-padding-top">
                    <label htmlFor={"radios" + this.numQ}>Correct Answer:</label>
                    <div className="radio-inline" id={"radios" + this.numQ}>
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