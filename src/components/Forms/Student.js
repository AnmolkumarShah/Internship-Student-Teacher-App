import React, { Component } from 'react'
import {register} from '../../Actions/studentAction'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {connect} from 'react-redux'

class Student extends Component{
  state = {
    isOpen : false,
    one : false,
    two : false,
    three : false,
    four : false,
    five : false,
    six : false,
    seven : false,
    firstname : '',
    lastname : '',
    contact : '',
    email : '',
    course : ''
  }

  seventoggle = () => {
    this.setState({
      seven : ! this.state.seven,
    })
  }

  fivetoggle = () => {
    this.setState({
      five : ! this.state.five,
    })
  }

  sixtoggle = () => {
    this.setState({
      six : ! this.state.six,
    })
  }

  Onetoggle = () => {
    this.setState({
      one : ! this.state.one,
    })
  }

  twotoggle = () => {
    this.setState({
      two : ! this.state.two,
    })
  }

  threetoggle = () => {
    this.setState({
      three : ! this.state.three,
    })
  }

  fourtoggle = () => {
    this.setState({
      four : ! this.state.four,
    })
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
            <input type="text" className="form-control" id="firstname" name="firstname" onChange={this.changeHandler} required/>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" className="form-control" id="lastname" name="lastname" onChange={this.changeHandler} required/>
          </div>
        </div>


        <div className="input-group  mb-3">
          <div className="input-group-prepend">
            <span  id="contact">Contact No.</span>
          </div>
          <input type="tel"  className="form-control" id="contact" name="contact" onChange={this.changeHandler} required/>
        </div>


        <div className="input-group  mb-3">
          <div className="input-group-prepend">
            <span  id="email">Email</span>
          </div>
          <input type="email" className="form-control" id="email" name="email" onChange={this.changeHandler} required/>
        </div>

        <div className='ml-3 mt-3 mr-2'>
      <div>
        <Button className='waves-effect waves-light btn' color="primary" onClick={this.Onetoggle} >Class I to IX (State board)</Button>
        <Collapse isOpen={this.state.one}>
          <select className="custom-select" id="course" name="course" onChange={this.changeHandler}>
            <option selected>Select Class</option>
            <option value="State board Class I">Class I</option>
            <option value="State board Class II">Class II</option>
            <option value="State board Class III">Class III</option>
            <option value="State board Class IV">Class IV</option>
            <option value="State board Class V">Class V</option>
            <option value="State board Class VI">Class VI</option>
            <option value="State board Class VII">Class VII</option>
            <option value="State board Class VIII">Class VIII</option>
            <option value="State board Class IX">Class IX</option>
          </select>
        </Collapse>
      </div>

      <div>
        <Button className='waves-effect waves-light btn' color="primary" onClick={this.sixtoggle} >Class I to IX (CBSE)</Button>
        <Collapse isOpen={this.state.six}>
          <select className="custom-select" id="course" name="course" onChange={this.changeHandler}>
            <option selected>Select Class</option>
            <option value="CBSE Class I">Class I</option>
            <option value="CBSE Class II">Class II</option>
            <option value="CBSE Class III">Class III</option>
            <option value="CBSE Class IV">Class IV</option>
            <option value="CBSE Class V">Class V</option>
            <option value="CBSE Class VI">Class VI</option>
            <option value="CBSE Class VII">Class VII</option>
            <option value="CBSE Class VIII">Class VIII</option>
            <option value="CBSE Class IX">Class IX</option>
          </select>
        </Collapse>
      </div>

      <div>
        <Button className='waves-effect waves-light btn' color="primary" onClick={this.seventoggle} >Class I to IX (ICSE)</Button>
        <Collapse isOpen={this.state.seven}>
          <select className="custom-select" id="course" name="course" onChange={this.changeHandler}>
            <option selected>Select Class</option>
            <option value="ICSE Class I">Class I</option>
            <option value="ICSE Class II">Class II</option>
            <option value="ICSE Class III">Class III</option>
            <option value="ICSE Class IV">Class IV</option>
            <option value="ICSE Class V">Class V</option>
            <option value="ICSE Class VI">Class VI</option>
            <option value="ICSE Class VII">Class VII</option>
            <option value="ICSE Class VIII">Class VIII</option>
            <option value="ICSE Class IX">Class IX</option>
          </select>
        </Collapse>
      </div>



      <div>
        <Button className='waves-effect waves-light btn' color="primary" onClick={this.twotoggle} >Class X (State/CBSE/ICSE)</Button>
        <Collapse isOpen={this.state.two}>
          <select className="custom-select" id="course" name="course" onChange={this.changeHandler}>
            <option selected>Select Class</option>
            <option value="Class Xth State">Class Xth State</option>
            <option value="Class Xth CBSE">Class Xth CBSE </option>
            <option value="Class Xth ISCE">Class Xth ISCE</option>
          </select>
        </Collapse>
      </div>

      <div>
        <Button className='waves-effect waves-light btn' color="primary" onClick={this.threetoggle} >12th JEE / NEET State/CBSE/ICSE/PCM/PCB</Button>
        <Collapse isOpen={this.state.three}>
          <select className="custom-select" id="course" name="course" onChange={this.changeHandler}>
            <option selected>Select Class</option>
            <option value="Class 12th State PCM">Class 12th State PCM</option>
            <option value="Class 12th State PCB">Class 12th State PCB</option>
            <option value="Class 12th CBSE PCM">Class 12th CBSE PCM</option>
            <option value="Class 12th CBSE PCB">Class 12th CBSE PCB</option>
            <option value="Class 12th ISCE PCM">Class 12th ISCE PCM</option>
            <option value="Class 12th ISCE PCB">Class 12th ISCE PCB</option>

            <option value="JEE">JEE</option>
            <option value="NEET">NEET</option>
          </select>
        </Collapse>
      </div>

      <div>
        <Button className='waves-effect waves-light btn' color="primary" onClick={this.fourtoggle} >Polytechnique</Button>
        <Collapse isOpen={this.state.four}>
          <select className="custom-select" id="course" name="course" onChange={this.changeHandler}>
            <option selected>Select Course</option>
            <option value="Diploma in Mechanical Engineering">Diploma in Mechanical Engineering</option>
            <option value="Diploma in Electrical Engineering">Diploma in Electrical Engineering </option>
            <option value="Diploma in Civil Engineering">Diploma in Civil Engineering </option>
            <option value="Diploma in Automobile Engineering">Diploma in Automobile Engineering </option>
            <option value="Diploma in Computer Science">Diploma in Computer Science </option>
            <option value="Diploma in Petroleum Engineering">Diploma in Petroleum Engineering </option>
            <option value="Diploma in Textile Technology ">Diploma in Textile Technology </option>
            <option value="Diploma in Mining Engineering">Diploma in Mining Engineering </option>
            <option value="Diploma in Chemical Engineering">Diploma in Chemical Engineering </option>
          </select>
        </Collapse>
      </div>

      <div>
        <Button className='waves-effect waves-light btn' color="primary" onClick={this.fivetoggle} >Engineering</Button>
        <Collapse isOpen={this.state.five}>
          <select className="custom-select" id="course" name="course" onChange={this.changeHandler}>
            <option selected>Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ME">ME</option>
            <option value="EE">EE</option>
            <option value="CIVIL">CIVIL ENGG</option>
            <option value="ETC">ETC</option>
            <option value="CT">CT</option>
          </select>
        </Collapse>
      </div>

      <div>
      </div>
      </div>
      
        <button type="submit" className=" waves-effect waves-light btn btn-warning">Register Me</button>
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