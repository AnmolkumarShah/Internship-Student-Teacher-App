import React, { Component } from 'react'
import {connect} from 'react-redux'
import {AddQue} from '../../Actions/studentAction'
import Head from '../Contact/Head';

class Contact extends Component {
  state = {
    subject : '',
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
    this.props.newQue(this.state)
  }

  render(){
    return(
      <>
      <Head />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='h3'>Address</div>
            <div className='p ml-2'>Addr line one</div>
            <div className='p ml-2'>Addr line two</div>
            <div className='p ml-2'>Addr line three</div>
          </div>
          <div className='col-sm-6'>
            <div className='h3'>Something</div>
            <div className='p ml-2 fa fa-phone'>  Telephone No.</div><br></br>
            <div className='p ml-2 fa fa-envelope'>  Mail Address</div><br></br>
            <div className='p ml-2'><span className='fa fa-facebook-square fa-lg ml-1'></span>
            <span className='fa fa-twitter-square fa-lg ml-1'></span>
            <span className='fa fa-instagram  fa-lg ml-1'></span></div>
          </div>
        </div>
        <hr></hr>
        <div className='h3 text-dark my-3'>Ask A Question</div>
        <div className='row' >
          <form className='mx-auto' onSubmit={this.submitHandler}>
            <div className="form-row ">
              <div className="form-group text-dark">
                  <label className="text-dark" htmlFor="subject">Question Subject</label>
                  <input type="text" className="form-control" id="subject" name="subject" onChange={this.changeHandler}  required/>
                </div>
              </div>

              <div className="form-group ">
                <label className="text-dark" htmlFor="description">Description</label>
                <textarea onChange={this.changeHandler} name = 'description' value={this.state.description} className="form-control" id="description" rows="2"></textarea>
              </div>

              <button type="submit" className="btn btn-warning ">Add Question</button>
          </form>
        </div>
      </div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    newQue : (details) => dispatch(AddQue(details))
  }
}


export default connect(null,mapDispatchToProps)(Contact);
