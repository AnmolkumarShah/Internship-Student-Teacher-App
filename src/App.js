import React, { Component } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom'


class App extends Component{
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out')
    M.Sidenav.init(sidenav, {})
    }
    
  render(){
    return(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
  }
}

export default App;