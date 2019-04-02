import React, { Component } from 'react';
import {Slider, WithOnResize} from 'react-simple-image-carousel';

export class neutralPictureCarousel extends Component {
    render() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">Neutral Photos</h1>
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
            </div>
        );
    }
}