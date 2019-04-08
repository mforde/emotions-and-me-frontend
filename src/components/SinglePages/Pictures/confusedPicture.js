import React, { Component } from 'react';
import {Slider, WithOnResize} from 'react-simple-image-carousel';
import emojis from "../../../constants/Emojis";
import Link from "react-router-dom/es/Link";

export class confusedPictureCarousel extends Component {
    returnToTasklist = () => {
        if (this.props.location.state !== undefined) {
            if (this.props.location.state.isTLTask === true) {
                return (
                    <div className="w3-display-container">
                        <Link to={{
                            pathname: '/tasklistpage',
                            state: {
                                tasklistName: this.props.location.state.tasklistName,
                                tasklistData: this.props.location.state.tasklistData
                            }
                        }} style={{textDecoration: 'none'}}>
                            <button className="w3-button w3-theme w3-display-right w3-margin-bottom">
                                Return to Tasklist <i className="arrow right"/>
                            </button>
                        </Link>
                    </div>
                )
            }
        }
        return <div className="w3-display-container"/>
    };

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
                <div className="w3-display-container">
                    <a href="/picturelist">
                        <button className="w3-button w3-theme w3-display-left w3-margin-bottom">
                            <i className="arrow left"/> Back
                        </button>
                    </a>
                </div>
                {this.returnToTasklist()}
            </div>
        );
    }
}