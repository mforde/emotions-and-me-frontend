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
        "https://www.universityofcalifornia.edu/sites/default/files/angry_face.jpg",
        "https://www.sciencedaily.com/images/2014/08/140828184811_1_900x600.jpg"
        ]}
    /></div>

        );
    }
}