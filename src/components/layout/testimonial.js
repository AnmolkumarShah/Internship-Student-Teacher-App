import React, { Component } from "react";
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import Slider from "react-slick";

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
      fade : true
    };
    return (
      <div  className='container mb-4'>
        <h2 className='text-center display-4 text-muted'>Testimonials</h2>
        <Slider {...settings} className='container'>
          <Card style={{'maxWidth' : '50px', "margin" : "0 20px"}} className='bg-warning mx-auto z-depth-2 container'>
            <div className='mx-auto mt-3'><img className="center circle" src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' /></div>
            <CardBody>
              <h1><CardTitle >Anmol Shah</CardTitle></h1>
              <CardText className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </CardText>
            </CardBody>
          </Card>

          <Card style={{'maxWidth' : '50px', "margin" : "0 20px"}} className='bg-primary mx-auto z-depth-2 container'>
            <div className='mx-auto mt-3'><img className="center circle" src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' /></div>
            <CardBody>
              <h1><CardTitle >Saloni Shah</CardTitle></h1>
              <CardText className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </CardText>
            </CardBody>
          </Card>


          <Card style={{'maxWidth' : '50px', "margin" : "0 20px"}} className='bg-danger mx-auto z-depth-2 container'>
            <div className='mx-auto mt-3'><img className="center circle" src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' /></div>
            <CardBody>
              <h1><CardTitle >Naman Shah</CardTitle></h1>
              <CardText className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </CardText>
            </CardBody>
          </Card>

          <Card style={{'maxWidth' : '50px', "margin" : "0 20px"}} className='bg-info mx-auto z-depth-2 container'>
            <div className='mx-auto mt-3'><img className="center circle" src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' /></div>
            <CardBody>
              <h1><CardTitle >Mona Shah</CardTitle></h1>
              <CardText className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </CardText>
            </CardBody>
          </Card>
        </Slider>
      </div>
    );
  }
}