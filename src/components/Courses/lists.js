import React from 'react';
import { ListGroup } from 'reactstrap';
import Course from './list-item'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { connect } from 'react-redux';



const list = ({courses}) => {
  console.log(courses)
  return (
    <>
    <div className='h3 text-center'>Our Courses</div>
    <div className='h6 text-center'>Click on Course for more details</div>
    <ListGroup className='container'>
    {(courses !== undefined) && courses.map((item,index) => <Course index={index} course={item} key={item.id} /> )}
      <Course />
    </ListGroup>
    </>
  );

}

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
)(list);
