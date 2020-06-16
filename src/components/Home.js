import React, { Component } from 'react'
import Head from './layout/Head'
import Carousel from './layout/Carousel/Carousel'
import { Card, Button, CardTitle, CardText, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StudentForm from './Forms/Student'
import TeacherForm from './Forms/Teacher'

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
        <Col sm="6">
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
        <Col sm="6">
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
      width : '100%',
      height : '100%'
    }
    return(
      <>
        <Head />
        <div className="row mx-auto">
          <StudentModal />
          <TeacherModal />
        </div>
        <Carousel />
      </>
    )
  }
}

export default Home;