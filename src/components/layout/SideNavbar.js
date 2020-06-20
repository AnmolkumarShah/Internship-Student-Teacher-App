import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import {NavItem, Button, ButtonGroup } from 'reactstrap'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../Actions/adminAction'

class Sidenav extends Component{
      
  render(){
    return (
      <div>
           <a style={{'position' : 'fixed', 'right' : '0', 'top' : '4','margin' : '10px'}} data-target="slide-out" className=" z-depth-5 sidenav-trigger show-on-large btn-floating btn-large orange darken-3 pulse"><i className="material-icons">menu</i></a>

         <ul id="slide-out" className="sidenav orange lighten-4">
          <li><div class="user-view">
            <div class="background">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg2QGNzZQraiwoWraK-8RZYCbmwqEOQn9fLxzoLiSXw0443PNU&usqp=CAU" />
            </div>
            <h1 className='white-text'>BRAND</h1>            
          </div></li>

          <li><NavLink to='/' className='nav-link'><span>Home</span></NavLink></li>
          <li><NavLink to='/courses' className='nav-link'><span>Courses</span></NavLink></li>
          <li> <NavLink to='/contact' className='nav-link'><span>Contact Us</span></NavLink></li>
          <li> <NavLink to='/about' className='nav-link'><span>About Us</span></NavLink></li>
          <li>
          <NavItem>
          {(!this.props.uid) ? <Button className='btn-sm' color='dark'><NavLink to='/login' className='nav-link text-white p-0'>Login</NavLink></Button> : 
          <ButtonGroup ><Button className='btn-sm' onClick={this.props.signOut}  color='dark'><NavLink to='/' className='nav-link text-white p-0'>Sign Out</NavLink></Button><Button  color='dark' className='btn-sm'><NavLink to='/dashboard' className='nav-link text-white p-0'>Dashboard</NavLink></Button></ButtonGroup >}
          </NavItem>
        </li>
         </ul>

      </div>
    );
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

export default connect(mapStateToProps,mapDispatchToProps)(Sidenav);