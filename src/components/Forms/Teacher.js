import React, { Component } from 'react'
import {register} from '../../Actions/teacherAction'
import {connect} from 'react-redux'

class Teacher extends Component{
  state = {
    firstname : '',
    lastname : '',
    contact : '',
    email : '',
    courses : '',
    subjects : ''
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
    this.props.register(this.state)
    this.props.toggleTeacherModal();
  }
  render(){
    return(
      <div className='container h6 mx-auto'>
      <form onSubmit={this.submitHandler}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="form-control" id="firstname" name="firstname" onChange={this.changeHandler} required/>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" className="form-control" id="lastname" name="lastname" onChange={this.changeHandler} required/>
          </div>
        </div>


        <div className="input-group  mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-warning text-white fa fa-phone fa-lg" id="contact"></span>
          </div>
          <input type="tel"  className="form-control" id="contact" name="contact" onChange={this.changeHandler} required/>
        </div>


        <div className="input-group  mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-warning text-white fa fa-envelope fa-lg " id="email"></span>
          </div>
          <input type="email" className="form-control" id="email" name="email" onChange={this.changeHandler} required/>
        </div>

        <div className="form-group">
          <label htmlfor="courses">Courses You Teach </label>
          <textarea onChange={this.changeHandler} name = 'courses' value={this.state.courses} className="form-control" id="courses" rows="2"></textarea>
          <p className='text-danger '>Eg. Class 1 CBSE or Class X .. etc</p>
          <p className='text-info'>Seperate Courses with comma (,)</p>
        </div>

        <div className="form-group">
          <label htmlfor="subjects">Subjects You Teach </label>
          <textarea onChange={this.changeHandler} name = 'subjects' value={this.state.subjects} className="form-control" id="subjects" rows="2"></textarea>
          <p className='text-danger'>Eg. Chemistry, Physics.. etc</p>
          <p className='text-info'>Seperate Subjects with comma (,)</p>
        </div>

        <button type="submit" className="btn btn-lg btn-warning ">Join</button>
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    register : (credentials) => dispatch(register(credentials))
  }
}


export default connect(null,mapDispatchToProps)(Teacher);
