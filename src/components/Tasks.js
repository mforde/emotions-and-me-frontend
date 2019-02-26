import React, { Component } from 'react';
import '../App.css';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            type: this.props.data.type,
            data: this.props.data
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        this.setState({
            checked: !this.state.checked
        })
    };

    task() {
        return (
            <div className="w3-row">
                <div className="w3-col">
                    <input type="checkbox" className="w3-check" onClick={this.handleClick}/>{this.state.type}
                </div>
            </div>
        );
    }

    render() {
        return (this.task());
    }
}

export default Task;