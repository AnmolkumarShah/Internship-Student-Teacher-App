import React, { Component } from 'react'

class Admin extends Component{
  state = {
    email : '',
    password : ''
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
    console.log(this.state)
  }
  render(){
    return(
      <div className='container h6 mt-5 mx-auto '>
      <form onSubmit={this.submitHandler} className="col-sm-6 mx-auto">
        <div className='display-3 mb-3'>Login</div>
        <div className="input-group  mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-danger text-white " id="email">Email</span>
          </div>
          <input type="email" className="form-control" id="email" name="email" onChange={this.changeHandler}/>
        </div>

        <div className="input-group  mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-danger text-white " id="password">Password</span>
          </div>
          <input type="password" className="form-control" id="password" name="password" onChange={this.changeHandler}/>
        </div>     

        <button type="submit" className="btn btn-lg btn-success">Login</button>
      </form>
      </div>
    )
  }
}

export default Admin;