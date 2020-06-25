import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css';

export class faq extends Component {
  render() {
    return (
      <div className="container">
        <ul className="collapsible popout">
          <li>
            <div className="collapsible-header h3 bg-primary"><i className="material-icons">filter_drama</i>How Gurusiksha works for Tutors?</div>
            <div className="collapsible-body  h6 orange accent-2"><span>Gurusiksha, a business unit of Prameya education pvt. Ltd., our services for tutors are totally based on android application available on google play store. All you need to download our app and register over there by clicking on “Mentor sing up” option. After submit all details and KYC verification on home page you will get to know about the details of verified students as per your chosen segment.</span></div>
          </li>
          <li>
            <div className="collapsible-header h3  bg-primary"><i className="material-icons">place</i>How Gurusiksha works for students?</div>
            <div className="collapsible-body h6  orange accent-2"><span>All the student connections on app are organic. Guardian need to fill up their enquiry on our landing page, with all contact (for OTP verification) and class details. After that our LCE (Lead Confirmation Executive) from Quality Management Team has call and recheck and verify those details. If anything we found wrong (wrong number/not required/ by mistake etc.) we do not update that connection on our app. After updating on app, only 5 teachers can apply on particular lead. And guardian has select from them as per their requirement, fees, time and location.</span></div>
          </li>
          <li>
            <div className="collapsible-header h3 bg-primary"><i className="material-icons">whatshot</i>Is it important to verify KYC and documents?</div>
            <div className="collapsible-body h6 orange accent-2"><span>Yes, it is mandatory to submit your address proof and last qualification certificate to verify their profile with Gurusiksha.</span></div>
          </li>
          <li>
            <div className="collapsible-header h3 bg-primary"><i className="material-icons">whatshot</i>What kind of refund policy Gurusiksha has covered?</div>
            <div className="collapsible-body h6 orange accent-2"><span>If anyone unable to find a single lead on homepage of our app within a period of 30 days from the date of recharge as per chosen segment (within 5 -10km radius for home tuition), then the total amount in the wallet will be refunded to the teacher if he claims for the same. If we are unable to provide you at least 8 leads within a period of 6 months as per your preferred segment (within 10 km radius of mentioned address for home tuition) then the total amount in the wallet will be refunded to the teacher on his claim.</span></div>
          </li>
          <li>
            <div className="collapsible-header h3 bg-primary"><i className="material-icons">whatshot</i>How to take classes through Gurusiksha?</div>
            <div className="collapsible-body h6 orange accent-2"><span>Leads are being verified over the phone by our LCE (Lead confirmation Executive) department and finally offered to our tutors in app. Only 5 teachers can apply on particular lead. After applying from homepage, the lead goes to the applied lead section. After getting contact details teacher need to call the guardian for demo. All the above mentioned lead details will not interfere or provide any sort of coverage regarding demo, Fees, timing, distance and duration that is being chosen by the teacher. All these things fall under the negotiable part between the teacher and the parents.</span></div>
          </li>
        </ul>
      </div>
    )
  }
}

export default faq
