import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import {fetchurl} from "../actions/videostreaming.js";

class IFrame extends Component {

    componentDidMount() {
        this.props.fetchurl(this.props.url);
    }

    render() {
        if (this.props.isFetching) {
            return (
                <div className="w3-center w3-padding">
                    <h4>Processing Video...</h4>
                </div>
            )
        }
        if (this.props.hasFailed) {
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
                        url={this.props.emotion_url}
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
    return state.videostream;
};

const mapDispatchToProps = {
    fetchurl,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (IFrame);