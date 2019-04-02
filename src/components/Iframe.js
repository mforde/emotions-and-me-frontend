import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux';
import {fetchurl} from "../actions/videostreaming.js";

class IFrame extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchurl(this.props.url);
    }

    componentDidUpdate() {

    }

    render() {

        return (
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={this.props.emotion_url}
                    playing={true}
                    controls={true}
                    width='50%'
                    height='80%'
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