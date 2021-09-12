import React from 'react';
import CovtrackerImage from '../assets/images/CovTracker.png';
import DayPlannerImage from '../assets/images/DayPlanner.png';
import RePostImage from '../assets/images/RePost.png';

function Homepage(){

    return(
<div className="container">  
        <div className="d-flex justify-content-center">
        <div className="col">
            <div className="container text-white">
                <h4 className="name text-white">CovTracker</h4>
                    <img src={CovtrackerImage} className="img.center" alt="CovTracker site" />
                   <p>CovTacker was an app developed by classmates and me to help track the current number of confirmed covid casses and a person current location.</p>
                   <p>Click the button below to check it out!</p>
                   <a className="btn btn-primary" href="https://jamesljenks.github.io/07_Project-1_CovTrack/" role="button">CovTracker</a>
            </div>
        </div>
        <div className="col">
            <div class="container text-white">
                <h4 className="name text-white">DayPlanner</h4>
                    <img src={DayPlannerImage} className="img.center" alt="DayPlanner site" />
                   <p>DayPlanner is an app that allows you to do exactly what the title alludes to: Plan your day. The interactive app will change colors depending on the time of the day and if the task is passed it's scheduled time.</p>
                   <p>Click the button below to check it out!</p>
                   <a className="btn btn-primary" href="https://andadam24.github.io/05_AAs_WorkDayScheduler/" role="button">DayPlanner</a>
            </div>
        </div>
        <div className="col">
            <div className="container text-white">
                <h4 className="name text-white">RePost</h4>
                    <img src={RePostImage} className="img.center" alt="RePost site" />
                   <p>RePost is a take on social media, where it allows you to share your thoughts and 'RePost' other user's thoughts.</p>
                   <p>Click the button below to check it out!</p>
                   <a className="btn btn-primary" href="https://repostproject.herokuapp.com/" role="button">RePost</a>
            </div>
        </div>
        </div>
  
      </div>
    );
  }
  
  export default Homepage;