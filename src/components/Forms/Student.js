import React, { Component } from 'react'
import {register} from '../../Actions/studentAction'
import {connect} from 'react-redux'

class Student extends Component{
  state = {
    firstname : '',
    lastname : '',
    contact : '',
    email : '',
    course : ''
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
    this.props.register(this.state);
    console.log(this.state)
    this.props.toggleStudentModal();
  }
  render(){
    return(
      <div className='container h6  mx-auto'>
      <form onSubmit={this.submitHandler}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="form-control" id="firstname" name="firstname" onChange={this.changeHandler} />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" className="form-control" id="lastname" name="lastname" onChange={this.changeHandler}/>
          </div>
        </div>


        <div className="input-group  mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-primary text-white" id="contact">Contact No.</span>
          </div>
          <input type="tel"  className="form-control" id="contact" name="contact" onChange={this.changeHandler}/>
        </div>


        <div className="input-group  mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-primary text-white " id="email">Email</span>
          </div>
          <input type="email" className="form-control" id="email" name="email" onChange={this.changeHandler}/>
        </div>

        <div className="input-group mb-3">
          <select className="custom-select" id="course" name="course" onChange={this.changeHandler}>
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="input-group-append">
              <label className="input-group-text bg-primary text-white" htmlFor="course">Course you need help with</label>
          </div>
        </div>

        <button type="submit" className="btn btn-lg btn-primary">Join</button>
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

export default connect(null,mapDispatchToProps)(Student);