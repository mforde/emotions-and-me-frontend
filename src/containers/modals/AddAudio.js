import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Modal, DropdownButton, MenuItem} from 'react-bootstrap';
import '../../App.css';
import {angryAudio, happyAudio, neutralAudio,
    fearAudio, disgustAudio} from "../../constants/AudioUrls";

class AddAudio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedEmotion: "none",
            selectedAudio: "none",
        }
    }

    static propTypes = {
        showModal: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        numQuestion: PropTypes.string.isRequired,
        onChooseAudio: PropTypes.func.isRequired,
        selectedAudio: PropTypes.object.isRequired,
    };

    onClick = (eventKey, event) => {
        this.setState({
            selectedEmotion: eventKey,
        })
    };

    showAudio = () => {
        let audios = null;
        let id = "";

        switch (this.state.selectedEmotion) {
            case "Angry":
                audios = angryAudio;
                id = "angry-audio";
                break;
            case "Happy":
                audios = happyAudio;
                id = "happy-audio";
                break;
            case "Neutral":
                audios = neutralAudio;
                id = "neutral-audio";
                break;
            case "Fear":
                audios = fearAudio;
                id = "fear-audio";
                break;
            case "Disgust":
                audios = disgustAudio;
                id = "disgust-audio";
                break;
            default:
                audios = [];
                id = "";
                break;
        }
        if (this.state.selectedEmotion === "none") {
            return (
                <DropdownButton id="dropdown-audio" className="w3-margin-left w3-padding" title="Choose an Emotion" disabled={true}/>
            )
        } else {
            return (
                <DropdownButton id={"dropdown-" + id} className="w3-margin-left w3-padding" title="Choose an Audio Clip">
                    <>
                        {audios.map(audio => {
                            return (
                                <MenuItem as="button" key={audio.label} eventKey={audio.url}
                                          onSelect={(eventKey, event) => this.props.onChooseAudio(eventKey, audio.label, this.props.numQuestion)}>{audio.label}</MenuItem>
                            )
                        })}
                    </>
                </DropdownButton>
            )
        }
    };

    render() {
        const {showModal, handleClose} = this.props;

        let num = this.props.numQuestion.split("")[0];
        let id = this.props.numQuestion.split("")[1];
        let selection = "none";
        if (num in this.props.selectedAudio){
            if(id in this.props.selectedAudio[num]) {
                selection = this.props.selectedAudio[num][id]["label"];
            }
        }

        return (
            <div>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Select Audio</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="w3-padding">
                            <DropdownButton id="dropdown-emotions" className="w3-padding" title="Choose an Emotion">
                                <MenuItem as="button" eventKey="Angry" onSelect={this.onClick}>Angry</MenuItem>
                                <MenuItem as="button" eventKey="Happy" onSelect={this.onClick}>Happy</MenuItem>
                                <MenuItem as="button" eventKey="Neutral" onSelect={this.onClick}>Neutral</MenuItem>
                                <MenuItem as="button" eventKey="Fear" onSelect={this.onClick}>Fear</MenuItem>
                                <MenuItem as="button" eventKey="Disgust" onSelect={this.onClick}>Disgust</MenuItem>
                            </DropdownButton>
                            {this.showAudio()}
                        </div>
                        <div>
                            Selected Emotion: {this.state.selectedEmotion}
                        </div>
                        <div>
                            Selected Photo: {selection}
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default AddAudio;