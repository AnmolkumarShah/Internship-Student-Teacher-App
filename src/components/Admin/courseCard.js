import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Spinner 
} from 'reactstrap';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { connect } from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom'

const courseCard = (props) => {
  return (
    <div>
      <Card className='bg-warning text-white'>
        <CardBody >
          <CardTitle>No. of Courses</CardTitle>
          <CardSubtitle>We Have</CardSubtitle>
          {(props.courses) ? <CardText className='display-3'>{props.courses.length}</CardText> : <div className="spinner-border d-block m-3 text-light"></div>}
          <Button  color='dark'><NavLink to='/courses' className='nav-link text-white p-0'>Course Data</NavLink></Button>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  const courses = state.firestore.ordered.courses;
  return{
    courses : courses,
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(ownProps => [
    {
      collection : 'courses',
      orderBy : ['date', 'desc']
    }
  ])
)(courseCard);
