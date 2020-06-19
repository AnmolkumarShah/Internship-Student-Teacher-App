import React from 'react';
import { Table,Jumbotron,Container,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Student from './Student';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom';

const Students = ({students,uid}) => {
    if(!uid) return <Redirect to='/home' />
  return (
    <>
      <Jumbotron fluid className='bg-dark' style={{"margin-top" : '50px'}}>
          <Container>
            <div className='row'>
              <div className='col-sm-6 text-white'>
                <h1 className='display-4'>Students</h1>
                <p className='lead shadow-lg'></p>
              </div>
              <div className='col-sm-6 my-auto text-center'>
              </div>
            </div>
          </Container>
        </Jumbotron>
        <Breadcrumb className=''>
          <BreadcrumbItem><Link to='/dashboard'>Dashboard</Link></BreadcrumbItem>
          <BreadcrumbItem active >Students Data</BreadcrumbItem>
        </Breadcrumb>
      <div className='m-2'>
        <Table dark responsive bordered striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Reg Date</th>
              <th>Courses</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {students && students.map((item,index) => <Student index={index} student={item} key={item.id} /> )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  const students = state.firestore.ordered.students;
  const uid = state.firebase.auth.uid;
  return{
    students : students,
    uid : uid,
  };
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect(ownProps => [
    {
      collection : 'students',
      orderBy : ['date', 'desc']
    }
  ])
)(Students);