import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import '../../App.css';

class SaveSuccess extends Component {
    static propTypes = {
        showModal: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        isSaving: PropTypes.bool.isRequired,
        hasFailed: PropTypes.bool.isRequired,
        hasSaved: PropTypes.bool.isRequired,
    };

    render() {
        const { showModal, handleClose, isSaving, hasFailed, hasSaved } = this.props;

        let content = "Something went wrong.";
        if (hasFailed) {
            content = "Something went wrong. Please try again by refreshing."
        } else if (hasSaved) {
            content = "Save Successful!"
        }
        else if (isSaving) {
            content = "Saving Assignment..."
        }
        return (
            <div>
                <Modal show={showModal} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Saving Assignment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {content}
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

}

export default SaveSuccess;