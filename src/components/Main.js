import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './layout/Navbar'

import Home from './Home'
import About from './About/About'
import Student from './Forms/Student'
import Teacher from './Forms/Teacher'
import Login from './Forms/Login'
import Dashboard from './Admin/Dashboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import StudentsData from './Admin/Students'
import TeachersData from './Admin/Teachers'

class Main extends Component{
  render(){
    return(
      <>
        <Navbar />
        <ToastContainer />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/student' component={Student} />
          <Route exact path='/teacher' component={Teacher} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/students-date' component={StudentsData} />
          <Route exact path='/teachers-date' component={TeachersData} />
          <Route path='/' component={Home} />
        </Switch>
      </>
    )
  }
}

export default Main;