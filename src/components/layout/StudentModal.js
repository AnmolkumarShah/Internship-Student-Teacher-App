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
        <div className='col-sm-8 '>
          <Card body className='mt-3 z-depth-4 rounded text-center'>
            <CardTitle className="h1">I'm A Student</CardTitle>
            <blockquote class="blockquote text-center">
              <p className="mb-0">“Teachers can open the door, but you must enter it yourself.”</p>
              <footer className="blockquote-footer"><cite title="Source Title">Chinese proverb</cite></footer>
            </blockquote>
            
            <Button onClick={this.toggleStudentModal} color='primary'>Join Now</Button>
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