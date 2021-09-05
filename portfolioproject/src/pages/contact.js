import React from 'react';

function Contact(){

    return(
      <div>
        <form>
          <h3>Contact</h3>

          <label> Name 
            <br />
            <input
              type="text"
              placeholder="Name"
            />
          </label>
          <br />
          <label> Email Address
            <br />
            <input
              type="email"
              placeholder="Email Address"
            />
          </label>
          <br />
          <label> Message
            <br />
            <input
              type="text"
              placeholder="Type message here ..."
              className="message"
            />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
  
  export default Contact;