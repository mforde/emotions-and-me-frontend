import React, { Component } from 'react';
import '../App.css';
import MultiSelect from "@kenshooui/react-multi-select";


class StudentSelect extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            items : [
                {id: 0, label: "Zach Morris"},
                {id: 1, label: "Kelly Kapowski"},
                {id: 2, label: "A.C. Slater"},
                {id: 3, label: "Lisa Turtle"},
                {id: 4, label: "Jessie Spano"},
                {id: 5, label: "Samuel Powers"},
                {id: 6, label: "Tori Scott"},
            ],
            selectedItems: []
        };
    }

    handleChange(selectedItems) {
        this.setState({ selectedItems });
    }

    render() {
        const { items, selectedItems } = this.state;
        return (
            <div className="w3-container w3-padding-top">
                <label className="w3-padding ">Select Students to Receive Quiz
                    <MultiSelect
                        items={items}
                        selectedItems={selectedItems}
                        onChange={this.handleChange}
                        height="200"
                    />
                </label>
            </div>
        );
    }
}

export default StudentSelect;