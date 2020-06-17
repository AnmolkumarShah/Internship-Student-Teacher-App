import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {NavLink} from 'react-router-dom'

const Cards = (props) => {
  return (
    <div>
    <div className='row m-1'>
      <div className='col-sm-6' >
        <Card body outline color="primary" className='bg-secondary'>
          <CardTitle>BEST ONLINE TUITION CLASSES BY OUR VERTEX TUTORS</CardTitle>
          <CardText>Within the proximity of your home get the assistance of the best online as well as offline teachers to nourish the preparation of your child. Online live sessions are provided here to clarify the concepts and to provide education in the most interactive manner.</CardText>
          <Button color='primary'><NavLink to='/courses' className='nav-link text-white'>Explore Courses</NavLink></Button>
        </Card>
      </div>
      <div className='col-sm-6'>
        <Card body outline color="primary" className='bg-warning'>
          <CardTitle>TUITION BY OUR MOST QUALIFIED HOME TUTOR</CardTitle>
          <CardText>Gurusiksha bridges the gap between the great mentors and students need. provides online as well as offline assistance to the students so they can solving their queries and doubts. strongly believe in providing the best online as well as offline tuitions to the students. Use our Gurusiksha app to collect the required information of your subject starting from class VI- Class XII along with other school level competitive exams.</CardText>
          <Button color="secondary"><NavLink to='/about' className='nav-link text-white p-0'>Learn More</NavLink></Button>
        </Card>
      </div>
    </div>   
    
    </div>
  );
};

export default Cards;