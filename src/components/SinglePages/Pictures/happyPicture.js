import React, { Component } from 'react';
import {Slider} from 'react-simple-image-carousel';

export  class happyPictureCarousel extends Component {
    render() {
        return (
                              <div className="text-center">

            <Slider
    width={850}
    height={450}
    maxSwipeThreshold={250 * 0.15}
    minSwipeThreshold={40}
    swipeTimeThreshold={200}
    images={[
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/HAPPY/1.png",
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/HAPPY/2.png",
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/HAPPY/3.png",
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/HAPPY/4.png",

        ]}
    /></div>

        );
    }
}