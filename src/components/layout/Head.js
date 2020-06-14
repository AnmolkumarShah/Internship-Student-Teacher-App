import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Head = (props) => {
  const style = {
    'background-image' : "url('https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
    'background-size' : 'cover',
    'opacity' : '0.9'
  }
  return (
    <div>
      <Jumbotron fluid className='bg-dark' style={style}>
        <Container fluid>
          <div className='row'>
            <div className='col-sm-6 text-white'>
              <h1 className='display-4'>Brand Name</h1>
              <p className='lead shadow-lg'>When I was in early high school I really struggled in class. I lacked confidence and pretended I didn’t care about school to mask the fact that</p>
              <div className='btn btn-warning btn-lg mt-3'>Join Now!</div>
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