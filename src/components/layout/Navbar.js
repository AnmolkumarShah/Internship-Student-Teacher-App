import React, { Component } from 'react'
import {Nav, NavItem, Navbar, NavbarToggler, NavbarBrand, Collapse} from 'reactstrap'
import {NavLink} from 'react-router-dom'

class Head extends Component{
  state = {
    isNavOpen : false,
    isModalOpen: false,
  }

  

  toggleNav = () => {
    let show = this.state.isNavOpen;
    this.setState({
      isNavOpen : !show,
    })
  }

  render(){
    return(
      <>
      <Navbar dark color="primary" expand='md'>
        <div className="container">
        <NavbarToggler onClick={this.toggleNav}/>
          <NavbarBrand className='mr-auto' href="/">
            Brand 
          </NavbarBrand>
          <Collapse isOpen = {this.state.isNavOpen} navbar>
            <Nav navbar className='ml-auto'>

              <NavItem>
                <NavLink to='/home' className='nav-link'>
                  <span>Home</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='/menu' className='nav-link'>
                  <span>Courses</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='/about' className='nav-link'>
                  <span>About Us</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='/contact-us' className='nav-link'>
                  <span>Contact Us</span>
                </NavLink>
              </NavItem> 

            </Nav>
          </Collapse>        
        </div>
      </Navbar>
      </>
    )
  }
}

export default Head;