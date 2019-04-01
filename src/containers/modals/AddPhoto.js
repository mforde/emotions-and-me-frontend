import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Modal, DropdownButton, MenuItem} from 'react-bootstrap';
import '../../App.css';
import {angryPhotos, happyPhotos, neutralPhotos,
    fearPhotos, disgustPhotos} from "../../constants/PhotoUrls";

class AddPhoto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedEmotion: "none",
            selectedPhoto: "none",
        }
    }

    static propTypes = {
        showModal: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        numQuestion: PropTypes.string.isRequired,
        onChoosePhoto: PropTypes.func.isRequired,
        selectedPhoto: PropTypes.object.isRequired,
    };

    onClick = (eventKey, event) => {
        this.setState({
            selectedEmotion: eventKey,
        })
    };

    showPhotos = () => {
        let photos = null;
        let id = "";

        switch (this.state.selectedEmotion) {
            case "Angry":
                photos = angryPhotos;
                id = "angry-photos";
                break;
            case "Happy":
                photos = happyPhotos;
                id = "happy-photos";
                break;
            case "Neutral":
                photos = neutralPhotos;
                id = "neutral-photos";
                break;
            case "Fear":
                photos = fearPhotos;
                id = "fear-photos";
                break;
            case "Disgust":
                photos = disgustPhotos;
                id = "disgust-photos";
                break;
            default:
                photos = [];
                id = "";
                break;
        }
        if (this.state.selectedEmotion === "none") {
            return (
                <DropdownButton id="dropdown-photos" className="w3-margin-left w3-padding" title="Choose an Emotion" disabled={true}/>
            )
        } else {
            return (
                <DropdownButton id={"dropdown-" + id} className="w3-margin-left w3-padding" title="Choose a Photo">
                    <>
                        {photos.map(photo => {
                            return (
                                <MenuItem as="button" key={photo.label} eventKey={photo.url}
                                          onSelect={(eventKey, event) => this.props.onChoosePhoto(eventKey, photo.label, this.props.numQuestion)}>{photo.label}</MenuItem>
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
        if (num in this.props.selectedPhoto){
            if(id in this.props.selectedPhoto[num]) {
                selection = this.props.selectedPhoto[num][id]["label"];
            }
        }

        return (
            <div>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Select Photo</Modal.Title>
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
                            {this.showPhotos()}
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

export default AddPhoto;