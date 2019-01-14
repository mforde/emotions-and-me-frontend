import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWebcamStream } from '../actions';

class Webcam extends Component {
    static propTypes = {
        webcamStream: PropTypes.instanceOf(MediaStream).isRequired,
        isFetching: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { dispatch, webcamStream } = this.props;
        dispatch(getWebcamStream());
        if(this.video) {
            this.video.srcObject = webcamStream;
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

const mapStateToProps = state => state.webcamStream;

export default connect(
    mapStateToProps
)(Webcam);
