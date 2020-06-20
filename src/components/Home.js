import React, { Component } from 'react'
import Carousel from './layout/Carousel/Carousel'
import { Card, Button, CardTitle, CardText, Col, Modal, ModalHeader, ModalBody,Jumbotron, Container,Badge, Row   } from 'reactstrap';
import TeacherModal from './layout/TeacherModal'
import StudentModal from './layout/StudentModal'

import Cards from './layout/Cards';
import {NavLink} from 'react-router-dom'
import FAQ from '../components/layout/Collapse'
import Courses from './layout/Courses/Courses'
import './layout/Head.css'
import TestimonialTest from './layout/testimonial';
import Info from './layout/Info'




const Head = (props) => {
  const style = {
    "font-family": "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
  }

  return (
    <>

    <div className="jumbotron jumbotron-fluid z-depth-4" style={{}}>
      <div className="container">  
        <div className="main mx-2 p-2 text-center">
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
            <StudentModal /> 
            <TeacherModal />             
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
        <Container>
          <div className='row'>
            <div className='col-sm-6 text-left' >
              <h1 style={{"color": "white", "mix-blend-mode": "difference"}} className='text-white'>TUITION BY OUR MOST QUALIFIED HOME TUTOR</h1>
              <div style={{"color": "white", "mix-blend-mode": "difference"}} className=' h4 lead font-weight-bold d-sm-none d-md-block'>Gurusiksha bridges the gap between the great mentors and students need. provides online as well as offline assistance to the students so they can solving their queries and doubts. strongly believe in providing the best online as well as offline tuitions to the students.</div>
              <Button className="btn-primary mt-4">Learn More</Button>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

const JumboTwo = () => {
  const stydentStyle = {
    'background-image' : "url('https://images.pexels.com/photos/267491/pexels-photo-267491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
  'background-size' : 'cover',
  'opacity' : '0.9',
  'padding' : '5px',
  }
  return (
    <div>
      <Jumbotron fluid style={stydentStyle} className="z-depth-4">
        <Container>
          <div className='row'>
            <div className='col-sm-6'></div>
            <div className='col-sm-6 text-right' >
              <h1 style={{"color": "white", "mix-blend-mode": "difference"}} className='text-white'>BEST ONLINE TUITION CLASSES BY OUR VERTEX TUTORS</h1>
              <div style={{"color": "white", "mix-blend-mode": "difference"}} className=' h4 lead font-weight-bold'>Within the proximity of your home get the assistance of the best online as well as offline teachers to nourish the preparation of your child. Online live sessions are provided here to clarify the concepts and to provide education in the most interactive manner.</div>
              <Button className="btn-primary mt-4">Learn More</Button>
            </div>
          </div>
        </Container>
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
        <Head />
        <TestimonialTest/>
        <JumboOne/>
        <JumboTwo/>
        <Info />
        <Courses />
        <div className='display-4 text-center mt-3 text-muted'>FAQ's</div>
        <p className="text-center">Click for more information</p>
        <FAQ />   
        <Carousel />
      </>
    )
  }
}

export default Home;