import React from 'react';
import AAResume from '../assets/images/Adam Andrzejczak Resume10241024_1.jpg';

function Resume(){

    return(
      
        <div className="container">
        <h3>Resume</h3>
          <div className="row">
            <div className="col-12">
            <img src={AAResume} alt=""/>
            </div>
            

        </div>
      </div>
    );
  }
  
  export default Resume