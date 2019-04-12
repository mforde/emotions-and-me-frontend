import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import {getProcessedVideo, sendVideoUrl} from "../actions";

class IFrame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isProcessing: true,
            hasFailed: false,
        }
    }

    componentDidMount() {
        if (this.props.id === '') {
            this.props.sendVideoUrl(this.props.url);
        } else {
            this.props.getProcessedVideo(this.props.id);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.video_id !== prevProps.video_id) {
            this.props.getProcessedVideo(this.props.video_id);
        }

        if (this.props.status !== prevProps.status) {
            if (this.props.status === 'FAILED') {
                this.setState({
                    hasFailed: true,
                    isProcessing: false,
                })
            }
            if (this.props.status === 'SUCCEEDED') {
                this.setState({
                    isProcessing: false,
                })
            }
            if (this.props.status === 'PENDING') {
                this.props.getProcessedVideo(this.props.video_id);
            }
        }
    }

    render() {
        if (this.state.isProcessing || this.props.isFetching) {
            return (
                <div className="w3-center w3-padding">
                    <h4>Processing Video...</h4>
                </div>
            )
        }
        if (this.state.hasFailed || this.props.hasFailed) {
            return (
                <div className="w3-center w3-padding">
                    <h4>Failed to process video.</h4>
                </div>
            )
        } else {
            return (
                <div className='player-wrapper w3-center w3-padding'>
                    <ReactPlayer
                        className='react-player'
                        url={this.props.video_url}
                        playing={true}
                        controls={true}
                        width='100%'
                        height='100%'
                    />
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        hasFailed: state.videostream.hasFailed,
        isFetching: state.videostream.isFetching,
        video_id: state.videostream.video_id,
        video_url: state.videostream.video_url,
        status: state.videostream.status,
        yt_url: state.videostream.yt_url,
    }
};

const mapDispatchToProps = {
    sendVideoUrl,
    getProcessedVideo
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (IFrame);