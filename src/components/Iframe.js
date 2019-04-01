import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux';
import {fetchurl} from "../actions/videostreaming.js";

class IFrame extends Component {

    componentDidMount() {
        this.props.fetchurl(this.props.url);
    }

    render() {

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