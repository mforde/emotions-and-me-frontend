import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import '../App.css';
import QuizQuestion from "../components/QuizQuestion";
import StudentSelect from "../components/StudentSelect";

class QuizMakerPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teacher: "",
            students: [],
            name: "",
            numQuestions: 1,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    questionList = [<QuizQuestion
                        key={1}
                        number={1}
                        label={"Q1"}
                        onChange={this.handleQuestionChange.bind(this)}
                    />];

    handleSubmit = async values => {
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(300);
        alert(JSON.stringify(this.state));
        //event.preventDefault();
    }

    handleInputChange(property) {
        return e => {
            this.setState({
                [property]: e.target.value
            });
        };
    }

    handleQuestionChange(qId, value) {
        alert(JSON.stringify(value));
        this.setState({
            [qId]: value
        });
    }

    render() {
        return (
            <div className="w3-container w3-margin">
                <QuizForm/>
            </div>
        );
    }

    onAddQuestion = () => {
        let tempQ = this.questionList;
        let tempNum = this.state.numQuestions + 1;
        tempQ.push(<QuizQuestion
                        key={tempNum}
                        number={tempNum}
                        label={"Q" + tempNum}
                        onChange={this.handleQuestionChange.bind(this)}
                    />);

        this.setState({
            numQuestions: tempNum,
        });
    };

    onRemoveQuestion = () => {
        let tempQ = this.questionList;
        let newNum = this.state.numQuestions;

        if(this.state.numQuestions > 1) {
            tempQ.pop();
            newNum -= 1;
        }

        this.setState({
            numQuestions: newNum,
        });
    }
}

const OtherQuizForm = () => (
    <form onSubmit={this.handleSubmit}>
        <div className={"w3-group w3-card w3-padding w3-padding-24"}>
            <label htmlFor="quizName">Quiz Name:</label>
            <input type="quizName" className="form-control w3-bar" id="quizName" value={this.state.name}
                   onChange={this.handleInputChange('name')}/>
        </div>
        <div className="questions" id="questions">
            {this.questionList}
        </div>
        <button type="button" className="w3-button w3-theme" id="addBtn" onClick={this.onAddQuestion}>Add
            Question
        </button>
        <button type="button" className="w3-button w3-theme" id="removeBtn"
                onClick={this.onRemoveQuestion}>Remove Question
        </button>
        <StudentSelect/>
        <input type="submit" value="Save & Send Quiz" className="w3-button w3-theme w3-bar"/>
    </form>
)


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const QuizForm = () => (
    <Form
        onSubmit={onSubmit}
        mutators={{
            ...arrayMutators
        }}
        render={({
            handleSubmit,
            mutators: { push, pop }, // injected from final-form-arrays above
            pristine,
            reset,
            submitting,
            values
        }) => {
            return (
                <form onSubmit={handleSubmit}>
                    <div className={"w3-group w3-card w3-padding w3-padding-24"}>
                        <label htmlFor="quizName">Quiz Name:</label>
                        <Field
                            name="quizName"
                            component="input"
                            id="quizName"
                            className="w3-bar"
                        />
                    </div>
                    <FieldArray name="questions">
                        {({fields}) =>
                            fields.map((name, index) => (
                                <div key={name} className="w3-group w3-card w3-display-container w3-padding w3-padding-24">
                                    <div
                                        onClick={() => fields.remove(index)}
                                        className="w3-display-topright w3-padding w3-padding-16"
                                        style={{cursor: 'pointer'}}>✖
                                    </div>
                                    <div className="w3-padding-top">
                                        <label>Question {index + 1}:</label>
                                        <div className="w3-container w3-right">
                                            <button type="button" className="w3-button" id={"photoQ" + index}>Add Photo</button>
                                            <button type="button" className="w3-button" id={"audioQ" + index}>Add Audio</button>
                                        </div>
                                    </div>
                                    <Field
                                        name={`${name}.Q${index}`}
                                        component="input"
                                        id="text"
                                        className="w3-bar"
                                    />
                                    <div className="w3-padding-top">
                                        <label>Answer A:</label>
                                        <div className="w3-container w3-right">
                                            <button type="button" className="w3-button" id={"photoA" + index}>Add Photo</button>
                                            <button type="button" className="w3-button" id={"audioA" + index}>Add Audio</button>
                                        </div>
                                        <Field
                                            name={`${name}.A${index}`}
                                            component="input"
                                            className="w3-bar"
                                            id={"answerA" + index}
                                        />
                                    </div>
                                    <div className="w3-padding-top">
                                        <label>Answer B:</label>
                                        <div className="w3-container w3-right">
                                            <button type="button" className="w3-button" id={"photoB" + index}>Add Photo</button>
                                            <button type="button" className="w3-button" id={"audioB" + index}>Add Audio</button>
                                        </div>
                                        <Field
                                            name={`${name}.B${index}`}
                                            component="input"
                                            className="w3-bar"
                                            id={"answerB" + index}
                                        />
                                    </div>
                                    <div className="w3-padding-top">
                                        <label>Answer C:</label>
                                        <div className="w3-container w3-right">
                                            <button type="button" className="w3-button" id={"photoC" + index}>Add Photo</button>
                                            <button type="button" className="w3-button" id={"audioC" + index}>Add Audio</button>
                                        </div>
                                        <Field
                                            name={`${name}.C${index}`}
                                            component="input"
                                            className="w3-bar"
                                            id={"answerC" + index}
                                        />
                                    </div>
                                    <div className="w3-padding-top">
                                        <label>Answer D:</label>
                                        <div className="w3-container w3-right">
                                            <button type="button" className="w3-button" id={"photoD" + index}>Add Photo</button>
                                            <button type="button" className="w3-button" id={"audioD" + index}>Add Audio</button>
                                        </div>
                                        <Field
                                            name={`${name}.D${index}`}
                                            component="input"
                                            className="w3-bar"
                                            id={"answerD" + index}
                                        />
                                    </div>
                                    <div className="w3-padding-top">
                                        <label>Correct Answer:</label>
                                        <div className="radio-inline">
                                            <label className="w3-padding">
                                                <Field
                                                    name={`${name}.correct${index}`}
                                                    component="input"
                                                    type="radio"
                                                    className="w3-radio w3-padding"
                                                    id="correctA"
                                                    value="A"
                                                />{' '}
                                                A
                                            </label>
                                            <label className="w3-padding">
                                                <Field
                                                    name={`${name}.correct${index}`}
                                                    component="input"
                                                    type="radio"
                                                    className="w3-radio w3-padding"
                                                    id="correctB"
                                                    value="B"
                                                />{' '}
                                                B
                                            </label>
                                            <label className="w3-padding">
                                                <Field
                                                    name={`${name}.correct${index}`}
                                                    component="input"
                                                    type="radio"
                                                    className="w3-radio w3-padding"
                                                    id="correctC"
                                                    value="C"
                                                />{' '}
                                                C
                                            </label>
                                            <label className="w3-padding">
                                                <Field
                                                    name={`${name}.correct${index}`}
                                                    component="input"
                                                    type="radio"
                                                    className="w3-radio w3-padding"
                                                    id="correctD"
                                                    value="D"
                                                />{' '}
                                                D
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </FieldArray>
                    <div className="buttons w3-padding">
                        <button type="button" className="w3-button w3-theme" onClick={() => push('questions', undefined)}>
                            Add Question
                        </button>
                        <button type="button" className="w3-button w3-theme" onClick={() => pop('questions')}>
                            Remove Question
                        </button>
                    </div>
                    <StudentSelect/>
                    <div className="buttons">
                        <button type="submit" className="w3-button w3-theme w3-bar w3-half" disabled={submitting || pristine}>
                            Save & Send Quiz
                        </button>
                        <button
                            type="button"
                            onClick={reset}
                            className="w3-button w3-theme w3-bar w3-half"
                            disabled={submitting || pristine}>
                            Clear
                        </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )
        }}
    />
)

export default QuizMakerPage;