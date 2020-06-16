import React, { Component } from 'react'
import StudentCard from './studentCard'
import TeacherCard from './teacherCard'
import {Jumbotron,Container} from 'reactstrap'


class Dashboard extends Component{
  render(){
    console.log(this.props)
    return(
      <>
      <Jumbotron fluid className='bg-dark'>
        <Container>
          <div className='row'>
            <div className='col-sm-6 text-white'>
              <h1 className='display-4'>Dashboard</h1>
              <p className='lead shadow-lg'></p>
            </div>
            <div className='col-sm-6 my-auto text-center'>
            </div>
          </div>
        </Container>
      </Jumbotron>
        <div className='row m-3'>
          <div className='col-sm-6'>
            <StudentCard />
          </div>
          <div className='col-sm-6 '>
            <TeacherCard />
          </div>
        </div>
      </>
    )
  }
}


export default (Dashboard);