import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Head.css'

const Head = (props) => {

  return (
    <>

    <div className="jumbotron jumbotron-fluid">
      <div className="container">  
        <div className="main">
          <h1>We are Broadway</h1>
          <a href="www.corriere.it" className="btn-main">Get Started</a>
        </div>
      </div>
    </div>

    <div className="supporting">
      <div className="container">
        <div className="col">
          <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg" />
          <h2>Design</h2>
          <p>Make your projects look great and interact beautifully.</p>
          <a href ="" className="btn-default">Learn more</a>
        </div>
        <div className="col">
          <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/develop.svg" />
          <h2>Develop</h2>
          <p>Use modern tools to turn your design into a web site</p><br />
          <a href ="" className="btn-default">Learn more</a>
        </div>
        <div className="col">
          <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/deploy.svg" />
          <h2>Deploy</h2>
          <p>Use modern tools to turn your design into a web site</p><br />
           <a href ="" className="btn-default">Learn more</a>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
    </>
  );
};



export default Head;