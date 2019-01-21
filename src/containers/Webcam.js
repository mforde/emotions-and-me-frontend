import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWebcamStream } from '../actions';
import Emotions from '../constants/Emotions';
import EmotionLabel from '../components/EmotionLabel';
import "../App.css";

class Webcam extends Component {
    static propTypes = {
        webcamStream: PropTypes.instanceOf(MediaStream).isRequired,
        isFetching: PropTypes.bool.isRequired,
        getWebcamStream: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getWebcamStream();
        if(this.video) {
            this.video.srcObject = this.props.webcamStream;
        }
    }

    componentDidUpdate() {
        if(this.video) {
            const { webcamStream } = this.props;
            this.video.srcObject = webcamStream;
        }
    }

    render() {
        const { isFetching } = this.props;

        if (isFetching) {
            return "Loading...";
        }

        return (
            <div className="w3-container">
                <h2 className="w3-center">Try some faces!</h2>
                <video className="w3-center" autoPlay ref={video => {this.video = video}} />
                <h3 className="w3-center w3-padding">
                    Your emotion:&nbsp;
                    <EmotionLabel emotion={Emotions.HAPPY} />
                </h3>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.webcamStream
}

const mapDispatchToProps = {
    getWebcamStream,
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Webcam);