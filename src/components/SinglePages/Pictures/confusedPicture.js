import React, { Component } from 'react';
import {Slider, WithOnResize} from 'react-simple-image-carousel';
import emojis from "../../../constants/Emojis";

export class confusedPictureCarousel extends Component {
    render() {
        return (
            <div className="w3-container">
                <h1 className="w3-center">
                    <img className="w3-image w3-margin-right" src={emojis.confused} alt="confused" style={{width: '8%'}}/>
                    Confused Photos
                    <img className="w3-image w3-margin-left" src={emojis.confused} alt="confused" style={{width: '8%'}}/>
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
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVKz7lov2XvXTsVD0PBGX9S8pOinKgMCaO8R0gYfGloMS2plC",
                                    "https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzA3XFxcLzI0MTU0ODEzXFxcL2NvbmZ1c2VkLVJvbi1pbi1IYXJyeS1Qb3R0ZXItYW5kLVNvcmNlcmVycy1TdG9uZS5qcGdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuaGVyLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvaGVyXFxcL25vLWltYWdlLnBuZz92PTIyXCIsXCJvcHRpb25zXCI6W119IiwiaGFzaCI6IjUwN2EzMTg2ZjgzNmYyMjIwYmVlMTQxYzM4YTcxYjAwMzUyZGY2MTgifQ==/confused-ron-in-harry-potter-and-sorcerers-stone.jpg"
                                ]}
                            />
                        )}
                    </WithOnResize>
                </div>
            </div>
        );
    }
}