import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import { connect } from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom'

const questionCard = (props) => {
  return (
    <div>
      <Card className='bg-info text-white'>
        <CardBody>
          <CardTitle>No. of </CardTitle>
          <CardSubtitle>Question</CardSubtitle>
            {(props.questions) ? <h1 className='h1'>{props.questions.length}</h1> : <div className="spinner-border d-block m-3 text-light"></div>}
          <Button  color='dark'><NavLink to='/questions' className='nav-link text-white p-0'>Asked Question Data</NavLink></Button>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  const questions = state.firestore.ordered.questions;
  return{
    questions : questions,
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
)(questionCard);
