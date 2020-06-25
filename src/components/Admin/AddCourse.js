import React, { Component } from 'react'
import { Badge } from 'reactstrap';
import {connect} from 'react-redux'
import {addCourse} from '../../Actions/adminAction'

class AddCourse extends Component{
  state = {
    name : '',
    description : '',
  }

  changeHandler = (event) => {
    const target = event.target;    
    const value = target.value;    
    const name = target.name;
    this.setState({
      [name] : value
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.newCourse(this.state)
  }
  render(){
    return(
      <>
      <h1><Badge className='ml-2' color="warning">Add New Course</Badge></h1>
      <div className=' h6 mx-3 mt-3'>
      <form onSubmit={this.submitHandler}>
        <div className="form-row">
          <div className="form-group col-md-8">
            <label htmlFor="name" className='text-dark'>Course Name</label>
            <input type="text" className="form-control" id="name" name="name" onChange={this.changeHandler} required/>
          </div>
        </div>

        <div className="form-group">
          <label htmlfor="description" className='text-dark'>Description</label>
          <textarea onChange={this.changeHandler} name = 'description' value={this.state.description} className="form-control" id="description" rows="2"></textarea>
        </div>

        <button type="submit" className="btn btn-warning ">Add Course</button>
      </form>
      </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    newCourse : (details) => dispatch(addCourse(details))
  }
}


export default connect(null,mapDispatchToProps)(AddCourse);
