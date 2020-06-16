import React from 'react';
import { Table, Jumbotron,Container,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Teacher from './Teacher';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

const Teachers = ({teachers}) => {
  return (
    <>
      <Jumbotron fluid className='bg-dark'>
        <Container>
          <div className='row'>
            <div className='col-sm-6 text-white'>
              <h1 className='display-4'>Teachers</h1>
              <p className='lead shadow-lg'></p>
            </div>
            <div className='col-sm-6 my-auto text-center'>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Breadcrumb className=''>
        <BreadcrumbItem><Link to='/dashboard'>Dashboard</Link></BreadcrumbItem>
        <BreadcrumbItem active >Teachers Data</BreadcrumbItem>
      </Breadcrumb>
      <div className='m-3'>
        <Table dark responsive bordered striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Reg Date</th>
              <th>Courses</th>
              <th>Subjects</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {teachers && teachers.map((item,index) => <Teacher index={index} teacher={item} key={item.id} /> )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  const teachers = state.firestore.ordered.teachers;
  return{
    teachers : teachers,
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(ownProps => [
    {
      collection : 'teachers',
      orderBy : ['date', 'desc']
    }
  ])
)(Teachers);