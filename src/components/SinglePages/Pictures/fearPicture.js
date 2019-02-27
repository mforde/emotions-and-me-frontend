import React, { Component } from 'react';
import {Slider} from 'react-simple-image-carousel';

export  class fearPictureCarousel extends Component {
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
        "http://www.prolifehumanists.org/wp-content/uploads/2015/12/Home-alone-xmas-panic.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/1200px-Welchcorgipembroke.JPG"
        ]}
    /></div>

        );
    }
}