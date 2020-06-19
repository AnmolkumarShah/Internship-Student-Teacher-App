import React from 'react';
import { Jumbotron, Container} from 'reactstrap';

const Head = (props) => {
  const style = {
    'background-image' : "url('https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
    'background-size' : 'cover',
    'opacity' : '0.9',
    "margin-top" : '50px'
  }
  return (
    <div>
      <Jumbotron fluid className='bg-dark' style={style}>
        <Container fluid>
          <div className='row'>
            <div className='col-sm-6 text-white main mx-auto'>
              <h1 className='display-4 text-white'>Contact</h1>
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