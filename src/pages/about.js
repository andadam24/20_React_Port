import React from 'react';
import aboutMeImage from '../assets/images/IMG_1956.jpg'

function About(){

    return(
      <div className="container">
        <h3>About Me</h3>
          <div className="row">
            <div className="col-3">
              <img src={aboutMeImage} alt=""/>
            </div>
            <div className="col-8 align-self-center">
          
                  <card>
                    
                  Hello, my name is Adam Andrzejczak. I graduated from Michigan State University in 2016 with a Bachelor's Degree in Finance. I have been working full-time since and thought that coding would be an interesting skill to learn. I stumbled upon the MSU Bootcamp and thought this would be a great way to learn. I hope you enjoy my portfolio and my contact information is below if you'd like to connect.

                  </card>
            </div>

        </div>
      </div>
    );
  }
  
  export default About;