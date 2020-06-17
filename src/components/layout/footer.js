import React from 'react'
import {NavLink} from 'react-router-dom'

const footer = () => {
  return(
    <div className="footer bg-dark text-white mt-5">
      <div className="container">
          <div className="row justify-content-center mt-2">             
              <div className="col-4 offset-1 col-sm-2 mt-4">
                  <h5>Links</h5>
                  <ul className="list-unstyled">
                      <li>Home</li>
                      <li>Courses</li>
                      <li>About</li>
                      <li>FAQ's</li>
                  </ul>
              </div>
              <div className="col-7 col-sm-5 mt-4">
                  <h5>Our Address</h5>
                  <address>
                121, Clear Water Bay Road<br />
                Clear Water Bay, Kowloon<br />
                HONG KONG<br />
                <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                <i className="fa fa-envelope fa-lg"></i>: <a href="">
                      mail@gmail.com</a>
                  </address>
              </div>
              <div className="col-12 col-sm-4 align-self-center mt-4">
                  <div className="text-center">
                  </div>
              </div>
          </div>
          <div className="row justify-content-center">             
              <div className="col-auto">
                  <p>© Copyright 2020 Something</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default footer;