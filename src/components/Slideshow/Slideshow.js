import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import './SlideShow.css';

function Slideshow(props) {
    return (
        <div className="parentDiv">
            <div className="scale">
                <Carousel effect="fade" autoplay >
                    <div className="blur">
                        <img
                            src="https://source.unsplash.com/random/2200x505"
                            alt=""
                        />
                    </div>
                    <div>

                        <img
                            src="https://picsum.photos/2200/500"
                            alt=""
                        />
                    </div>
                    <div>

                        <img
                            src="https://source.unsplash.com/random/2200x500"
                            alt=""
                        />
                    </div>
                    <div>

                        <img
                            src="https://picsum.photos/2200/500"
                            alt=""
                        />
                    </div>
                </Carousel>

            </div>
            <span className="hoverShow">COME GET YOUR WORK DONE</span>


        </div>
    )
}

export default Slideshow;

