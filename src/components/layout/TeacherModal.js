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
        <div className='col-sm-8 '>
          <Card body className='mt-3 z-depth-4 rounded text-center'>
            <CardTitle className="h1">I Want to be an Instructor</CardTitle>
            <blockquote class="blockquote text-center">
              <p className="mb-0">“Teaching is not a lost art, but the regard for it is a lost tradition.’ </p>
              <footer className="blockquote-footer"><cite title="Source Title">Jacques Barzun</cite></footer>
            </blockquote>
            <Button onClick={this.toggleTeacherModal} color='primary'>Join Now</Button>
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