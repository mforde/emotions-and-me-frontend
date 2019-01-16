import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWebcamStream } from '../actions';

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
            <div>
                <h1>Your webcam:</h1>
                <video autoPlay ref={video => {this.video = video}} />
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
