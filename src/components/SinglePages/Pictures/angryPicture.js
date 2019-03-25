import React from 'react';
import {Slider} from 'react-simple-image-carousel';

export  class angryPictureCarousel extends React.Component {
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
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/ANGRY/1.jpeg",
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/ANGRY/3.jpeg",
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/ANGRY/6.jpeg",
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/ANGRY/9.jpeg",
        "https://s3.us-east-2.amazonaws.com/emotions-and-me-bucket/Pictures/ANGRY/10.jpeg",



        ]}
    /></div>

        );
    }
}