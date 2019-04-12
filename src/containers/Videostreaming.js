import React, { Component } from 'react';
import IFrame from '../components/Iframe.js';
import '../App.css';
import Link from "react-router-dom/es/Link";

export default class VideoStreaming extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            id: '',
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.location.state) {
            this.setState({
                id: this.props.location.state.id,
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
        return <IFrame url={this.state.value} id={this.state.id}/>
    }

    returnToTasklist = () => {
        if (this.props.location.state !== undefined) {
            if (this.props.location.state.isTLTask === true) {
                return (
                    <div className="w3-display-bottomright w3-padding">
                        <Link to={{
                            pathname: '/tasklistpage',
                            state: {
                                tasklistName: this.props.location.state.tasklistName,
                                tasklistData: this.props.location.state.tasklistData
                            }
                        }} style={{textDecoration: 'none'}}>
                            <button className="w3-button w3-theme">
                                Return to Tasklist <i className="arrow right"/>
                            </button>
                        </Link>
                    </div>
                )
            }
        }
        return <div className="w3-display-bottomright w3-padding"/>
    };

    render() {
        return (
            <div className="w3-container w3-display-container">
                <h1 className="w3-center w3-margin-bottom">Emotions on Their Face</h1>
                <form className="w3-card w3-bar" onSubmit={this.handleSubmit}>
                    <label className="w3-margin-left">
                        Video Link:
                        <input className="w3-margin-left" type="Enter Video Link Here" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input className="w3-button w3-theme w3-margin" type="submit" value="Submit"/>
                </form>
                {this.state.submitted && this.renderIFrame()}
                {this.returnToTasklist()}
            </div>
        );
    }
}

