import React, { Component } from "react";
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
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

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow:1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      fade : true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div  className=''>
        <div className='text-left h3'>Teachers...</div>
        <Slider {...settings}>
          <Card style={{'maxWidth' : '50px', "margin" : "0 20px"}} className=' orange darken-3 mx-auto z-depth-2 container'>
            <div className='mx-auto mt-3'><img className="center circle" src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' /></div>
            <CardBody>
              <h1><CardTitle >Mr. Ram Samdekar</CardTitle></h1>
              <CardText className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </CardText>
            </CardBody>
          </Card>

          <Card style={{'maxWidth' : '50px', "margin" : "0 20px"}} className='lime darken-3 mx-auto z-depth-2 container'>
            <div className='mx-auto mt-3'><img className="center circle" src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' /></div>
            <CardBody>
              <h1><CardTitle >Mr. Nisarg Gandhewar</CardTitle></h1>
              <CardText className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </CardText>
            </CardBody>
          </Card>


          <Card style={{'maxWidth' : '50px', "margin" : "0 20px"}} className='teal darken-2 mx-auto z-depth-2 container'>
            <div className='mx-auto mt-3'><img className="center circle" src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' /></div>
            <CardBody>
              <h1><CardTitle >Mr. Ratnesh Choudhary</CardTitle></h1>
              <CardText className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </CardText>
            </CardBody>
          </Card>

          <Card style={{'maxWidth' : '50px', "margin" : "0 20px"}} className='purple darken-3 mx-auto z-depth-2 container'>
            <div className='mx-auto mt-3'><img className="center circle" src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' /></div>
            <CardBody>
              <h1><CardTitle >Mr. Animesh Tayal</CardTitle></h1>
              <CardText className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </CardText>
            </CardBody>
          </Card>
        </Slider>
      </div>
    );
  }
}