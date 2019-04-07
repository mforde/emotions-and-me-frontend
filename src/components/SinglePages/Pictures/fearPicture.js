import React, { Component } from 'react';
import {Slider, WithOnResize} from 'react-simple-image-carousel';
import emojis from "../../../constants/Emojis";

export class fearPictureCarousel extends Component {
    render() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">
                    <img className="w3-image w3-margin-right" src={emojis.fear} alt="fear" style={{width: '8%'}}/>
                    Fear Photos
                    <img className="w3-image w3-margin-left" src={emojis.fear} alt="fear" style={{width: '8%'}}/>
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
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/FEAR/1.jpg",
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/FEAR/2.jpg",
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/FEAR/3.jpg",
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/FEAR/4.jpg",
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/FEAR/6.jpg",
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/FEAR/7.jpg",
                                ]}
                            />
                        )}
                    </WithOnResize>
                </div>
            </div>
        );
    }
}