import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './layout/Navbar'

import Home from './Home'
import About from './About/About'

class Main extends Component{
  render(){
    return(
      <>
        <Navbar />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route path='/' component={Home} />
        </Switch>
      </>
    )
  }
}

export default Main;