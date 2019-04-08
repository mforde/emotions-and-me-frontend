import React, { Component } from 'react';
import {Slider, WithOnResize} from 'react-simple-image-carousel';
import emojis from "../../../constants/Emojis";
import Link from "react-router-dom/es/Link";

export class neutralPictureCarousel extends Component {
    returnToTasklist = () => {
        if (this.props.location.state !== undefined) {
            if (this.props.location.state.isTLTask === true) {
                return (
                    <div className="w3-display-container">
                        <Link to={{
                            pathname: '/tasklistpage',
                            state: {
                                tasklistName: this.props.location.state.tasklistName,
                                tasklistData: this.props.location.state.tasklistData
                            }
                        }} style={{textDecoration: 'none'}}>
                            <button className="w3-button w3-theme w3-display-right w3-margin-bottom">
                                Return to Tasklist <i className="arrow right"/>
                            </button>
                        </Link>
                    </div>
                )
            }
        }
        return <div className="w3-display-container"/>
    };

    render() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">
                    <img className="w3-image w3-margin-right" src={emojis.neutral} alt="neutral" style={{width: '8%'}}/>
                    Neutral Photos
                    <img className="w3-image w3-margin-left" src={emojis.neutral} alt="neutral" style={{width: '8%'}}/>
                </h1>
                <div className="w3-center w3-padding">
                    <WithOnResize
                        widthFactor={1}
                        heightFactor={2 / 3}
                        useWidthForHeight={true}
                        maxHeight={520}
                        maxWidth={720}
                    >
                        {(width, height) => (
                            <Slider
                                width={width}
                                height={height}
                                maxSwipeThreshold={width * 0.15}
                                minSwipeThreshold={40}
                                swipeTimeThreshold={200}
                                images={[
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/NEUTRAL/1.jpg",
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/NEUTRAL/2.jpg",
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/NEUTRAL/3.jpg",
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/NEUTRAL/4.jpg",
                                ]}
                            />
                        )}
                    </WithOnResize>
                </div>
                <div className="w3-display-container">
                    <a href="/picturelist">
                        <button className="w3-button w3-theme w3-display-left w3-margin-bottom">
                            <i className="arrow left"/> Back
                        </button>
                    </a>
                </div>
                {this.returnToTasklist()}
            </div>
        );
    }
}