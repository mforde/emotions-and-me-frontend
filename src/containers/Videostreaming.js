import React, { Component } from 'react';
import IFrame from '../components/Iframe.js';
import '../App.css';


export default class VideoStreaming extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.location.state) {
            this.setState({
                value: this.props.location.state.value,
                submitted: this.props.location.state.submitted
            })
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            submitted: false,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submitted: true
        });
    }

    renderIFrame() {
        return <IFrame url={this.state.value}/>
    }

    render() {
        return (
            <div className="w3-container">
                <h1 className="w3-center w3-margin-bottom">Emotions on Their Face</h1>
                <form className="w3-card w3-bar" onSubmit={this.handleSubmit}>
                    <label className="w3-margin-left">
                        Video Link:
                        <input className="w3-margin-left" type="Enter Video Link Here" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input className="w3-button w3-theme w3-margin" type="submit" value="Submit"/>
                </form>
                {this.state.submitted && this.renderIFrame()}
            </div>
        );
    }
}

