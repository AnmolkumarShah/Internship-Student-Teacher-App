import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'
import img1 from '../../../images/img1.jpg'
import img2 from '../../../images/img2.jpg'


export default function CarouselComponent() {
    return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop autoPlay onSwipeMove className='box col-sm-12'>
          <div className='images'>
              <img src={img1} alt='image' />
          </div>
          <div className='images'>
              <img src={img2} alt='image'/>             
          </div>
          
      </Carousel>
    </div>
    );
}