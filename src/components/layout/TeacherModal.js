import React, { Component } from 'react'
import TeacherForm from '../Forms/Teacher'
import { Card, Button, CardTitle, CardText, Col, Modal, ModalHeader, ModalBody,Jumbotron, Container,Badge, Row   } from 'reactstrap';

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
        <div className='col-sm-6 '>
          <Card body className='mt-3 z-depth-4'>
            <CardTitle>I Want to be an Instructor</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button onClick={this.toggleTeacherModal} color='primary'>Go somewhere</Button>
          </Card>
        </div>

        <Modal isOpen={this.state.isTeacherModal} toggle={this.toggleTeacherModal}>
          <ModalHeader toggle={this.toggleTeacherModal}>Register Yourself</ModalHeader>
            <TeacherForm toggleTeacherModal={this.toggleTeacherModal}/>
        </Modal>
      </>
    )
  }
};

export default TeacherModal;