import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class faq extends Component {
  state = {
    isOpen : false,
    one : false,
    two : false,
    three : false,
    four : false,
    five : false,
    six : false,
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

  render(){
    return (
      <div className='ml-3 mt-3 mr-2'>
      <div>
        <Button color="primary" onClick={this.Onetoggle} style={{"padding" : "20px" }}>How Gurusiksha works for Tutors?</Button>
        <Collapse isOpen={this.state.one}>
          <Card>
            <CardBody>
            Gurusiksha, a business unit of Prameya education pvt. Ltd., our services for tutors are totally based on android application available on google play store. All you need to download our app and register over there by clicking on “Mentor sing up” option. After submit all details and KYC verification on home page you will get to know about the details of verified students as per your chosen segment.
            </CardBody>
          </Card>
        </Collapse>
      </div>

      <div>
        <Button color="primary" onClick={this.twotoggle} style={{"padding" : "20px" }}>How Gurusiksha works for students?</Button>
        <Collapse isOpen={this.state.two}>
          <Card>
            <CardBody>
            All the student connections on app are organic. Guardian need to fill up their enquiry on our landing page, with all contact (for OTP verification) and class details. After that our LCE (Lead Confirmation Executive) from Quality Management Team has call and recheck and verify those details. If anything we found wrong (wrong number/not required/ by mistake etc.) we do not update that connection on our app. After updating on app, only 5 teachers can apply on particular lead. And guardian has select from them as per their requirement, fees, time and location.
            </CardBody>
          </Card>
        </Collapse>
      </div>

      <div>
        <Button color="primary" onClick={this.threetoggle} style={{ "padding" : "20px" }}> Is it important to verify KYC and documents?</Button>
        <Collapse isOpen={this.state.three}>
          <Card>
            <CardBody>
            Yes, it is mandatory to submit your address proof and last qualification certificate to verify their profile with Gurusiksha.
            </CardBody>
          </Card>
        </Collapse>
      </div>

      <div>
        <Button color="primary" onClick={this.fourtoggle} style={{ "padding" : "20px"}}>What kind of refund policy Gurusiksha has covered?</Button>
        <Collapse isOpen={this.state.four}>
          <Card>
            <CardBody>
            If anyone unable to find a single lead on homepage of our app within a period of 30 days from the date of recharge as per chosen segment (within 5 -10km radius for home tuition), then the total amount in the wallet will be refunded to the teacher if he claims for the same. If we are unable to provide you at least 8 leads within a period of 6 months as per your preferred segment (within 10 km radius of mentioned address for home tuition) then the total amount in the wallet will be refunded to the teacher on his claim.
            </CardBody>
          </Card>
        </Collapse>
      </div>

      <div>
        <Button color="primary" onClick={this.fivetoggle} style={{  "padding" : "20px"}}>How to take classes through Gurusiksha?</Button>
        <Collapse isOpen={this.state.five}>
          <Card>
            <CardBody>
            Leads are being verified over the phone by our LCE (Lead confirmation Executive) department and finally offered to our tutors in app. Only 5 teachers can apply on particular lead. After applying from homepage, the lead goes to the applied lead section. After getting contact details teacher need to call the guardian for demo. All the above mentioned lead details will not interfere or provide any sort of coverage regarding demo, Fees, timing, distance and duration that is being chosen by the teacher. All these things fall under the negotiable part between the teacher and the parents.
            </CardBody>
          </Card>
        </Collapse>
      </div>

      <div>
        <Button color="primary" onClick={this.sixtoggle} style={{  "padding" : "20px"}}>Why choose gurusiksha?</Button>
        <Collapse isOpen={this.state.six}>
          <Card>
            <CardBody>
            Gurusiksha is a number one emerging educational technological brand in India. It has change the concept of educational marketplace of India. In the perspective of student, we provide qualified and professional teachers, as well as if monitor a teacher’s point of view, we provide verified student connection, so that it will be easier to them to convert a tuition. Because of all this Gurusiksha had acquire a great place in market in very less time.
            </CardBody>
          </Card>
        </Collapse>
      </div>
      </div>
    );
  }
}

export default faq;