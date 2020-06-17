import React,{Component} from 'react';
import Head from './Head'
import List from './lists'

class Courses extends Component{
  render(){
    return(
      <>
        <Head />
        <List />
      </>
    )
  }
}

export default Courses;