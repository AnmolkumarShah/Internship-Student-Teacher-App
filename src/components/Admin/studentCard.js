import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { connect } from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom'

const studentCard = (props) => {
  return (
    <div>
      <Card className='bg-primary text-white'>
        <CardBody>
          <CardTitle>No. of Students</CardTitle>
          <CardSubtitle>Registered</CardSubtitle>
            {(props.students) ? <h1 className='h1'>{props.students.length}</h1> : <div className="spinner-border d-block m-3 text-light"></div>}
          <Button  color='dark'><NavLink to='/students-date' className='nav-link text-white p-0'>Students Data</NavLink></Button>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  const students = state.firestore.ordered.students;
  return{
    students : students,
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
)(studentCard);
