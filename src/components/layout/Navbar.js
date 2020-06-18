import React, { Component } from 'react'
import {Nav, NavItem, Navbar, NavbarToggler, NavbarBrand, Collapse, Button, ButtonGroup } from 'reactstrap'
import {NavLink, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../Actions/adminAction'

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
          { (!this.props.uid)? <NavbarBrand className='mr-auto' href="/"> Brand </NavbarBrand> : null
          }
          <Collapse isOpen = {this.state.isNavOpen} navbar>
            <Nav navbar className='ml-auto'>

              <NavItem>
                <NavLink to='/' className='nav-link'>
                  <span>Home</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to='/courses' className='nav-link'>
                  <span>Courses</span>
                </NavLink>
              </NavItem>

              

              <NavItem>
                <NavLink to='/contact' className='nav-link'>
                  <span>Contact Us</span>
                </NavLink>
              </NavItem> 

              <NavItem>
                <NavLink to='/about' className='nav-link'>
                  <span>About Us</span>
                </NavLink>
              </NavItem>

            </Nav>
            </Collapse>        
            <Nav className='ml-auto'>
              <NavItem>
                {(!this.props.uid) ? null : <ButtonGroup ><Button className='btn-sm' onClick={this.props.signOut}  color='dark'><NavLink to='/' className='nav-link text-white p-0'>Sign Out</NavLink></Button><Button  color='dark' className='btn-sm'><NavLink to='/dashboard' className='nav-link text-white p-0'>Dashboard</NavLink></Button></ButtonGroup >}
              </NavItem> 
            </Nav>
        </div>
      </Navbar>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return{
    uid: uid,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOut : () => dispatch(signOut())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Head);