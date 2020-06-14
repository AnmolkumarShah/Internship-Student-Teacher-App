import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'

export default function CarouselComponent() {
    return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop autoPlay onSwipeMove className='box col-sm-12'>
          <div>
              <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='image' />
              <div className='caption'>
                <h4>What We Provide #1</h4>
              </div>
          </div>
          <div>
              <img src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='image'/>
              <div className='caption'>
                <h4>What We Provide #2</h4>
              </div>
          </div>
          <div>
              <img src="https://images.pexels.com/photos/159823/kids-girl-pencil-drawing-159823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='image'/>
              <div className='caption'>
                <h4>What We Provide #3</h4>
              </div>
          </div>
      </Carousel>
    </div>
    );
}