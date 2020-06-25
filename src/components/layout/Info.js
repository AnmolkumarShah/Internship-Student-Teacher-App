import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class Rtl extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      rtl: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className=''>
        <h5 className="border-top-3 border-dark"></h5>
        <Slider {...settings}>
          <div className='text-center p-4 '>
            <h1><span className='fa fa-graduation-cap  fa-lg'></span></h1>
            <h5>Well Experiance Faculties</h5>
            <h6>It is a long established fact that a reader will be distracted by the</h6>
          </div>

          <div className='text-center p-4 '>
            <h1><span className='fa fa-universal-access fa-lg'></span></h1>
            <h5>Best Results</h5>
            <h6>It is a long established fact that a reader will be distracted by the</h6>
          </div>

          <div className='text-center p-4 '>
            <h1><span className='fa fa-calendar-check-o fa-lg'></span></h1>
            <h5>Weekly Exams</h5>
            <h6>It is a long established fact that a reader will be distracted by the</h6>
          </div>

          <div className='text-center p-4 '>
            <h1><span className='fa fa-snowflake-o   fa-lg'></span></h1>
            <h5>Full Length Modal Exams & Discussion</h5>
            <h6>It is a long established fact that a reader will be distracted by the</h6>
          </div>

          <div className='text-center p-4 '>
            <h1><span className='fa fa-handshake-o   fa-lg'></span></h1>
            <h5>Doubt Clearing Sessions</h5>
            <h6>It is a long established fact that a reader will be distracted by the</h6>
          </div>

        </Slider>
        <h5 className="border-bottom-3 border-dark"></h5>
      </div>
    );
  }
}