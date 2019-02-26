import React, { Component } from 'react';
import '../App.css';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            type: this.props.data.type,
            data: this.getTaskData(this.props.data)
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        this.setState({
            checked: !this.state.checked
        })
    };

    getTaskData = (data) => {
        if (data.type === "webcam") {
            return data.emotion;
        }
        if (data.type === "video") {
            return data.url;
        }
        if (data.type === "audio") {
            return data.emotion;
        }
        if (data.type === "browse") {
            return data.emotion;
        }
        if (data.type === "quiz") {
            return data.quizName;
        }
    };

    task = () => {
        if (this.state.type === "webcam") {
            return (
                <div className="w3-row w3-padding">
                    <input type="checkbox" className="w3-check"
                           onClick={this.handleClick}/> Go to the webcam feature and show
                    a <b>{this.state.data}</b> face!
                </div>
            )
        }
        if (this.state.type === "video") {
            return (
                <div className="w3-row w3-padding">
                    <input type="checkbox" className="w3-check"
                           onClick={this.handleClick}/> Go to the video streaming feature and watch this
                    video: <b>{this.state.data}</b>
                </div>
            )
        }
        if (this.state.type === "audio") {
            return (
                <div className="w3-row w3-padding">
                    <input type="checkbox" className="w3-check"
                           onClick={this.handleClick}/> Go to the audio recording feature and use
                    a <b>{this.state.data}</b> face!
                </div>
            )
        }
        if (this.state.type === "browse") {
            return (
                <div className="w3-row w3-padding">
                    <input type="checkbox" className="w3-check"
                           onClick={this.handleClick}/> Go to the browse photos & audio feature and
                    browse <b>{this.state.data}</b> photos and clips!
                </div>
            )
        }
        if (this.state.type === "quiz") {
            return (
                <div className="w3-row w3-padding">
                    <input type="checkbox" className="w3-check"
                           onClick={this.handleClick}/> Go complete the quiz named <b>{this.state.data}</b>
                </div>
            )
        }
    };

    render() {
        return (this.task());
    }
}

export default Task;