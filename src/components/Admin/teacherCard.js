import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Spinner 
} from 'reactstrap';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { connect } from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom'

const teacherCard = (props) => {
  return (
    <div>
      <Card className='bg-success text-white'>
        <CardBody >
          <CardTitle>No. of Teachers</CardTitle>
          <CardSubtitle>Registered</CardSubtitle>
          {(props.teachers) ? <h1 className='h1'>{props.teachers.length}</h1> : <div className="spinner-border d-block m-3 text-light"></div>}
          <Button  color='dark'><NavLink to='/teachers-date' className='nav-link text-white p-0'>Teachers Data</NavLink></Button>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
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
)(teacherCard);
