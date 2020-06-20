import React, { Component } from "react";
import Slider from "react-slick";

export default class Rtl extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      rtl: true
    };
    return (
      <div className='container'>
        <h5></h5>
        <Slider {...settings}>
          <div className='text-center p-4'>
            <h1><span className='fa fa-home fa-lg'></span></h1>
            <h5>Well Experiance Faculties</h5>
            <h6>It is a long established fact that a reader will be distracted by the</h6>
          </div>

          <div className='text-center p-4'>
            <h1><span className='fa fa-home fa-lg'></span></h1>
            <h5>Best Results</h5>
            <h6>It is a long established fact that a reader will be distracted by the</h6>
          </div>

          <div className='text-center p-4'>
            <h1><span className='fa fa-home fa-lg'></span></h1>
            <h5>Weekly Exams</h5>
            <h6>It is a long established fact that a reader will be distracted by the</h6>
          </div>

          <div className='text-center p-4'>
            <h1><span className='fa fa-home fa-lg'></span></h1>
            <h5>Full Length Modal Exams & Discussion</h5>
            <h6>It is a long established fact that a reader will be distracted by the</h6>
          </div>

          <div className='text-center p-4'>
            <h1><span className='fa fa-home fa-lg'></span></h1>
            <h5>Doubt Clearing Sessions</h5>
            <h6>It is a long established fact that a reader will be distracted by the</h6>
          </div>

          <div className='text-center p-4'>
            <h1><span className='fa fa-home fa-lg'></span></h1>
            <h5>Library</h5>
            <h6>It is a long established fact that a reader will be distracted by the</h6>
          </div>

          <div className='text-center p-4'>
            <h1><span className='fa fa-home fa-lg'></span></h1>
            <h5>Ac Class Rooms</h5>
            <h6>It is a long established fact that a reader will be distracted by the</h6>
          </div>

          <div className='text-center p-4'>
            <h1><span className='fa fa-home fa-lg'></span></h1>
            <h5>Hostel Facility</h5>
            <h6>It is a long established fact that a reader will be distracted by the</h6>
          </div>
        </Slider>
      </div>
    );
  }
}