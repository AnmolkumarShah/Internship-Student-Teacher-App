import React from 'react';
import { Table,Jumbotron,Container,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Question from './Question';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom';

const Questions = ({questions,uid}) => {
    if(!uid) return <Redirect to='/home' />
  return (
    <>
      <Jumbotron fluid className='bg-dark' style={{"margin-top" : '50px'}}>
          <Container>
            <div className='row'>
              <div className='col-sm-6 text-white'>
                <h1 className='display-4'>Asked Questions</h1>
                <p className='lead shadow-lg'></p>
              </div>
              <div className='col-sm-6 my-auto text-center'>
              </div>
            </div>
          </Container>
        </Jumbotron>
        <Breadcrumb className=''>
          <BreadcrumbItem><Link to='/dashboard'>Dashboard</Link></BreadcrumbItem>
          <BreadcrumbItem active >Asked Question</BreadcrumbItem>
        </Breadcrumb>
      <div className='m-2'>
        <Table dark responsive bordered striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Subject</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {questions && questions.map((item,index) => <Question index={index} question={item} key={item.id} /> )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  const questions = state.firestore.ordered.questions;
  const uid = state.firebase.auth.uid;
  return{
    questions : questions,
    uid : uid,
  };
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect(ownProps => [
    {
      collection : 'questions',
      orderBy : ['date', 'desc']
    }
  ])
)(Questions);