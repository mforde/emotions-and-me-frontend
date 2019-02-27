import React, { Component } from 'react';
import {Slider} from 'react-simple-image-carousel';

export  class neutralPictureCarousel extends Component {
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
        "https://i.dailymail.co.uk/i/pix/2015/05/21/18/28F1429A00000578-3091126-Alicia_s_neutral_face_was_guessed_at_41_years_old_which_is_her_a-a-5_1432229758662.jpg",
        ]}
    /></div>

        );
    }
}