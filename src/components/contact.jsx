import React from 'react';
import '../styles/contact.scss';

export default function Contact() {
  return (
  <>
    <div className="contact" id='contact'>
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
              <input type = "text" required placeholder = " Abc"/>
          </div>

          <div>
            <label>Email</label>
              <input type = "email" required placeholder = " Abc@xyz.com"/>
          </div>

          <div>
            <label>Message</label>
              <input type = "text" required placeholder = " Tell Us Your Query ..."/>
          </div>

          <button type = "submit">Send</button>


        </form>
      </main>
      
    </div>
    </>
  )
}
