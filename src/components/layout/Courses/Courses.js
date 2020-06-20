import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { connect } from 'react-redux';
import Item from "./item";

class CenterMode  extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    const courses = this.props.courses;
    return ( 
      <div className='container' style={{"marginBottom": "20px"}}>
        <h2 className='text-center'>Courses</h2>
        <p className='text-center color-fade'>Swipe right for more</p>
        <Slider {...settings}>
          {(courses !== undefined) && courses.map((item,index) => <Item index={index} course={item} key={item.id} /> )}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const courses = state.firestore.ordered.courses;
  return{
    courses : courses,
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(ownProps => [
    {
      collection : 'courses',
      orderBy : ['date', 'desc']
    }
  ])
)(CenterMode );
