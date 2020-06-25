import React,{Component} from 'react';
import Head from './Head'
import List from './lists'
import More from '../layout/Courses/More';

class Courses extends Component{
  render(){
    return(
      <>
        <Head />
        <div className='row'>
          <div className='col-sm-6'><List /></div>
          <div className='col-sm-6'><More/></div>
        </div>        
      </>
    )
  }
}

export default Courses;