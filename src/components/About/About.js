import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap';
import Carousel from '../layout/Carousel/Carousel'
import './About.css'

const About = () => {
  return(
    <>
    <div className="jumbotron-fluid" id="jumbo1">
            <div className="container">
                <div className="featured">
                <div className="row">
                 <div className="col-md-9 mt-3">
                <h1>
                  ABOUT
                </h1>
                <p>
                   our learning will make your life easier
                </p>
                <p>
          
                </p>
            </div>
              </div>
           </div>
        </div>
      </div>
   
     
      
       
<div className="container" >  
      
     <div className="section1">
               <p>
                   In our online tutoring and mentoring platform students will get step by step guidance from the most qualified teachers of the states in their respective subject of specialization.
Sometimes, it may happen that while you hire a private tutor for your word then they may not understand the topic which they are taught in school and in tuitions due to certain disturbances or rush. But now this problem will be over as the students will get personalized guidance from the best mentors of the state in the online mode.
               </p>
    </div>

   <div className="icons">
      <div className="container">
        <div className="row">
          <div className="col-md-4" id="md1">
                  
                  <h2>Price it</h2>
                  <p>Get in touch for an immediate no obligation quote!</p>
               </div>
               <div className="col-md-4">
                  
                  <h2>Plan it</h2>
                  <p>We will agree on a deadline and commit to it.</p>
               </div>
               <div className="col-md-4">
                  
                  <h2>Make it</h2>
                  <p>We will deliver your website on time with the best quality.</p>
            </div>
          </div>
        </div>
    </div>
    
        <div className="section2">
            <h2>Benefits of seeking our services</h2>
            <p>
                We in Gurusiksha focus our attention in providing the students the best online tuition classNamees from the best mentors of the state. So let’s explore some of the important benefits of our services.
            </p>
        </div>
        <div className="section 3">
            <h2>
               Flexibility and Affordability 
            </h2>
            <p>
               Our online tuitions classNamees are very easy to get and very affordable in rate. Best teachers of the state will get in touch with your candidate to prepare them well for the exam. Better to say all upcoming exams including all the school level competitive exams from className VI to XII. Our newly launched online app version can be easily accessible to provide help to the students at any place at any time.
            </p>
            <h2>
              Providing free study material  
            </h2>
            <p>
               Getting quality study material is a very difficult this day’s. The reason being the cost of the books and the private tuitions is rising at a faster pace. Even teacher don’t share their quality study materials for free to the students. On the contrary they charge higher prices for that. In that scenario we are providing you with top quality study materials and proper guidance along with that absolutely free. We are focused towards the well being the student’s academic career. Hence we provide free study materials to the students. 
            </p>
            <h2>
              Quality mentors within your proximity  
            </h2>
            <p>
                It is our conviction to provide you with quality tuitions within the proximity of your locality. This may happen that you are searching for a quality tutor at your locality but unable to find one. In that case our vertex mentors can prove to be the best solution for you. In our online portal best mentors of your locality has already made their registrations and hence you can get the assistance of such a mentor from our online platform.
            </p>
            <h2>
                Any time query resolve
            </h2>
            <p>
                It is quiet natural that while studying any topic or chapter a student may face any difficulty or problem. In that scenario he/she can raise their question in our website or in our app. Within 24 hours their problems will be resolved or their question will be answered by our teachers. Our pool of teachers will solve your doubts or query in a simple manner so that it can be easily understood by you. We focus our attention towards your quality preparation for the exam.
            </p>
            <hr/>
            <p>
                Hence it is our conviction to provide you are best and innovative services to keep your child updated and exam ready. Our teachers are dedicated in providing their best services to the student’s online as well as offline. So, it’s time to shake hands with the innovative learning experience with Gurusiksha to keep yourself updated and ahead in the face of stiff competition.
            </p>
</div>
<Carousel />
</div>

  </>)
}

export default About;