import React, { Component } from 'react';
import IFrame from '../components/Iframe.js';


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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Video Link:
                        <input type="Enter Video Link Here" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                {this.state.submitted && this.renderIFrame()}
            </div>
        );
    }
}



