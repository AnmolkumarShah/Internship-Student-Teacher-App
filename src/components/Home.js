import React, { Component } from 'react'
import Carousel from './layout/Carousel/Carousel'
import { Card, Button, CardTitle, CardText, Col, Modal, ModalHeader, ModalBody,Jumbotron, Container,Badge, Row   } from 'reactstrap';
import TeacherModal from './layout/TeacherModal'
import StudentModal from './layout/StudentModal'

import FAQ from './layout/faq'
import Courses from './layout/Courses/Courses'
import './layout/Head.css'
import TestimonialTest from './layout/testimonial';
import Info from './layout/Info'
import More from './layout/Courses/More';
import TopCarousel from './Top/TopCarousel'
import TestimonialTeacher from './layout/testimonialTeacher';




const Head = (props) => {
  const style = {
    "font-family": "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
  }

  return (
    <>

    <div className="jumbotron jumbotron-fluid z-depth-4" style={{'height' : "1000px"}}>
      <div className="container">  
        <div className="main mx-2 mt-4 p-2 text-center">
          <div className='display-2'>Brand Name</div>
          <div  className='h1 lead'>In our platform you will get the latest news of our services as well as the news of the examination that your student will give. We also provide news on various school level competitive exams in our</div>
        </div>
      </div>
    </div>

    <div className="supporting">
      <div className="container">
        <div className = 'container h2 text-center  mb-3 font-weight-bold' style={style}>
        FIND BEST HOME TUTORS NEAR YOU.
        </div>
        <Row>
                      
        </Row>
      </div>
    </div>
    </>
  );
};

const JumboOne = () => {
  const teacherStyle = {
    'background-image' : "url('https://images.pexels.com/photos/4173332/pexels-photo-4173332.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
  'background-size' : 'cover',
  'opacity' : '1',
  'padding' : '5px',
  }
  return (
    <div>
      <Jumbotron fluid style={teacherStyle} className="z-depth-4">
          <div className='row'>
            <div className='col-9 text-left' >
              <StudentModal /> 
              <TeacherModal />   
            </div>
            <div className='col'>
            </div>
          </div>        
      </Jumbotron>
    </div>
  );
}



class Home extends Component{
  render(){
    const style = {
      "font-family": "'Piedra', cursive",
    }
    const style2 = {
      "font-family": "'Marck Script', cursive",
      'font-size' : '30px',
    }
    
    

    return(
      
      <>
        <TopCarousel/>
        <div className = 'container display-4 text-center  mb-3 font-weight-bold'>
        FIND BEST HOME TUTORS NEAR YOU.
        </div>
        <JumboOne/>
        <h2 className='text-center display-4 text-muted'>Testimonials</h2>
        <div className='row'>
          <div className='mb-4 col-sm-6'><TestimonialTest/></div>
          <div className='mb-4 col-sm-6'><TestimonialTeacher/></div>
        </div>        
        <h2  className='text-center text-muted'><a href="#courses">Courses</a></h2>
        <p className='text-center color-fade'>Swipe right for more</p>
        <div className='row'>
        <div className='mb-4 col-sm-6'><Courses /></div>
          <div className='mb-4 col-sm-6'><More/></div>
        </div> 
        <Info />       
        <div className='display-4 text-center mt-3 text-muted'>FAQ's</div>
        <p className="text-center">Click for more information</p>
        <FAQ />  
        <Carousel />
      </>
    )
  }
}

export default Home;