import React from 'react';
import { Jumbotron, Container,Badge  } from 'reactstrap';

const Head = (props) => {
  const style = {
    'background-image' : "url('https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
    'background-size' : 'cover',
    'opacity' : '0.9'
  }
  return (
    <div>
      <Jumbotron fluid className='bg-dark' style={style}>
        <Container fluid>
          <div className='row'>
            <div className='col-sm-6 text-white '>
              <h1 className='display-4'><Badge href="#" color="secondary">Courses</Badge></h1>
              <p className='lead shadow-lg'>When I was in early high school I really struggled in class. I lacked confidence and pretended I didn’t care about school to mask the fact that</p>
            </div>

            <div className='col-sm-6 my-auto text-center'>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Head;