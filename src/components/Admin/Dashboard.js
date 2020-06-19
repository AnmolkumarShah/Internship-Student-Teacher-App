import React, { Component } from 'react'
import StudentCard from './studentCard'
import TeacherCard from './teacherCard'
import {Jumbotron,Container} from 'reactstrap'
import AddCourse from './AddCourse';
import CourseCard from './courseCard';
import QuestionCard from './QuestionCard';


class Dashboard extends Component{
  render(){
    console.log(this.props)
    return(
      <>
      <Jumbotron fluid className='bg-dark' style={{"margin-top" : '50px'}}>
        <Container>
          <div className='row'>
            <div className='col-sm-6 text-white'>
              <h1 className='h1'>Dashboard</h1>
              <p className='lead shadow-lg'></p>
            </div>
            <div className='col-sm-6 my-auto text-center'>
            </div>
          </div>
        </Container>
      </Jumbotron>
        <div className='row m-3'>
          <div className='col-sm-3'>
            <StudentCard />
          </div>
          <div className='col-sm-3 '>
            <TeacherCard />
          </div>
          <div className='col-sm-3 '>
            <CourseCard />
          </div>
          <div className='col-sm-3 '>
            <QuestionCard />
          </div>
        </div>
        <AddCourse />
      </>
    )
  }
}


export default (Dashboard);