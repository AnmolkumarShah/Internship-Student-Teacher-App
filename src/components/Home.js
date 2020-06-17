import React, { Component } from 'react'
import Head from './layout/Head'
import Carousel from './layout/Carousel/Carousel'
import { Card, Button, CardTitle, CardText, Col, Modal, ModalHeader, ModalBody,Jumbotron, Container  } from 'reactstrap';
import StudentForm from './Forms/Student'
import TeacherForm from './Forms/Teacher'
import Cards from './layout/Cards';
import {NavLink} from 'react-router-dom'

class TeacherModal extends Component{
  state = {
    isTeacherModal : false,
  }

  toggleTeacherModal = () => {
    this.setState({
      isTeacherModal : !this.state.isTeacherModal,
    })
  }
  render(){
    return(
      <>
        <Col>
          <Card body>
            <CardTitle>I Want to be an Instructor</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button onClick={this.toggleTeacherModal} color='primary'>Go somewhere</Button>
          </Card>
        </Col>

        <Modal isOpen={this.state.isTeacherModal} toggle={this.toggleTeacherModal}>
          <ModalHeader toggle={this.toggleTeacherModal}>Register Yourself</ModalHeader>
          <ModalBody>
            <TeacherForm toggleTeacherModal={this.toggleTeacherModal}/>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

class StudentModal extends Component{
  state = {
    isStudentModal : false,
  }

  toggleStudentModal = () => {
    this.setState({
      isStudentModal : !this.state.isStudentModal,
    })
  }

  render(){
    return (
      <>
        <Col>
          <Card body>
            <CardTitle>I'm A Student</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button onClick={this.toggleStudentModal} color='primary'>Go somewhere</Button>
          </Card>
        </Col>

        <Modal isOpen={this.state.isStudentModal} toggle={this.toggleStudentModal}>
          <ModalHeader toggle={this.toggleStudentModal} >Register Yourself</ModalHeader>
          <ModalBody>
            <StudentForm toggleStudentModal={this.toggleStudentModal}/>
          </ModalBody>          
        </Modal>
      </>
    );
  }
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
    const stydentStyle = {
      'background-image' : "url('https://images.pexels.com/photos/267491/pexels-photo-267491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
    'background-size' : 'cover',
    'opacity' : '0.9'
    }
    const teacherStyle = {
      'background-image' : "url('https://images.pexels.com/photos/4173332/pexels-photo-4173332.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
    'background-size' : 'cover',
    'opacity' : '0.9'
    }
    return(
      <>
        <Head />
        <div className = 'h2 text-center mx-4 mb-3' style={style}>MOST EXPERIENCED AND QUALIFIED PRIVATE HOME TUTOR AT YOUR FINGERTIP WITH BRAND
        </div>
        <Cards/>
        <Jumbotron fluid className='bg-dark' style={stydentStyle}>
            <Container fluid>
              <div className='row'>
                <div className='col-sm-6 text-white'>
                  <h1 className='display-4 text-warning'>Join As Student</h1>
                </div>
                <div className='col-sm-6 mx-auto my-auto text-center'>
                  <StudentModal />
                </div>
              </div>
            </Container>
          </Jumbotron>
        
        <blockquote className="blockquote text-center m-5" >
          <p style={style2} classNane="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
        <Jumbotron fluid className='bg-dark' style={teacherStyle}>
            <Container fluid>
              <div className='row'>
                <div className='col-sm-6 mx-auto my-auto text-center'>
                  <TeacherModal />
                </div>
                <div className='col-sm-6 text-white'>
                  <h1 className='display-4 text-primary'>Join As Teacher</h1>
                </div>
              </div>
            </Container>
          </Jumbotron>
        <Cards/> 
        <Jumbotron fluid className='bg-dark' style={teacherStyle}>
            <Container fluid>
              <div className='row'>
                <div className='col-sm-6 text-white'>
                  <h1 className='display-4 text-dark'>Ask A Question</h1>
                </div>
                <div className='col-sm-6 mx-auto my-auto text-center'>
                  <Button className='btn-warning btn-lg text-white'><NavLink to='/contact'>Ask</NavLink></Button>
                </div>
              </div>
            </Container>
          </Jumbotron>      
        <Carousel />
      </>
    )
  }
}

export default Home;