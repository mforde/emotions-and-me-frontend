import React, { Component } from 'react';
import {Slider, WithOnResize} from 'react-simple-image-carousel';

export class happyPictureCarousel extends Component {
    render() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">Happy Photos</h1>
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
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/HAPPY/1.png",
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/HAPPY/2.png",
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/HAPPY/3.png",
                                    "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/HAPPY/4.png",
                                ]}
                            />
                        )}
                    </WithOnResize>
                </div>
            </div>
        );
    }
}