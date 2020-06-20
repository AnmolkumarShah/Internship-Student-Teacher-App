import React, { Component } from 'react'
import StudentForm from '../Forms/Student'
import { Card, Button, CardTitle, CardText, Col, Modal, ModalHeader, ModalBody,Jumbotron, Container,Badge, Row   } from 'reactstrap';

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
        <div className='col-sm-6 '>
          <Card body className='mt-3 z-depth-4'>
            <CardTitle>I'm A Student</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button onClick={this.toggleStudentModal} color='primary'>Go somewhere</Button>
          </Card>
        </div>

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

export default StudentModal;