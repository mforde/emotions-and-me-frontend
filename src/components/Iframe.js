import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import {getProcessedVideo, sendVideoUrl} from "../actions";

const INTERVAL = 5; // how many seconds before re-trying "check_video"

class IFrame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isProcessing: true,
            hasFailed: false,
            seconds: 0
        }
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        if (this.props.id === '') {
            this.props.sendVideoUrl(this.props.url);
        } else {
            this.props.getProcessedVideo(this.props.id);
        }
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate(prevProps) {
        if (this.props.video_id !== prevProps.video_id) {
            this.props.getProcessedVideo(this.props.video_id);
            this.setState({ seconds: 0 }); // re-set count
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
        }

        if (this.props.status === 'PENDING' && this.state.seconds > INTERVAL) {
            if (this.props.id !== '') {
                this.props.getProcessedVideo(this.props.id);
                this.setState({ seconds: 0 }); // re-set count
            } else {
                this.props.getProcessedVideo(this.props.video_id);
                this.setState({ seconds: 0 }); // re-set count
            }
        }
    }

    render() {
        if (this.state.hasFailed || this.props.hasFailed) {
            return (
                <div className="w3-center w3-padding">
                    <h4>Failed to process video.</h4>
                </div>
            )
        }
        if (this.state.isProcessing || this.props.isFetching) {
            return (
                <div className="w3-center w3-padding">
                    <h4>Processing Video...</h4>
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