import React, { Component } from 'react'
import {  ListGroupItem , Modal, ModalBody,ModalHeader, Button, ModalFooter} from 'reactstrap';
import {Link} from 'react-router-dom'

  class courseInfo extends Component{
    state = {
      isModalOpen : false,
    }
  
    toggleModal = () => {
      this.setState({
        isModalOpen : !this.state.isModalOpen,
      })
    }
    render(){
      return(
        <>  
          {this.props.course ? <Button className='m-1 btn-primary' onClick={this.toggleModal}>{this.props.course.name}</Button> : null }
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>{this.props.course ? <p>{this.props.course.name}</p> : null}</ModalHeader>
            <ModalBody>
              {this.props.course ? <p>{this.props.course.description}</p> : null}
            </ModalBody>
            <ModalFooter>
              <Button onClick={this.toggleModal} color='danger'>Close</Button>
            </ModalFooter>
          </Modal>
        </>
      )
    }
  }


export default courseInfo;