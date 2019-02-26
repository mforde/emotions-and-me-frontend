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
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/BrowseAP/Happy/pictures/videoblocks-people-emotion-and-facial-expression-concept-face-of-happy-smiling-afro-american-man-with-dreadlocks-at-home_rydcbxjcl_thumbnail-full08.png",
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/BrowseAP/Happy/pictures/5.jpg\n"
        ]}
    /></div>

        );
    }
}