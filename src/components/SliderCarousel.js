import React from 'react';
import ImageOne from '../images/ImageOne.jpg';
import ImageTwo from '../images/ImageTwo.jpg';
import ImageThree from '../images/ImageThree.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "../App.css"

const SliderCarousel = (slides) => {
    return (
        <Carousel infiniteLoop autoPlay emulateTouch showStatus = {false}>
        <div>
            <img src={ImageOne} alt = ''/>
        </div>
        <div>
            <img src={ImageTwo} alt = ''/>
        </div>
        <div>
            <img src={ImageThree} alt = '' />
        </div>
    </Carousel>
    );
};

export default SliderCarousel;
