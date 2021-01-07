import React from 'react';
import emailjs from 'emailjs-com';

function Form() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_xwijsln', 'template_ub8hcck', e.target, 'user_XEwDZxeDiJSZWilT8lfYf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      document.getElementById("form").reset();
      alert("Your message was successfully recorded, thank you!");
  }

  return (
    <form className="contact-form" id="form" onSubmit={sendEmail}>
      <div className="form-group">
          <label for="example-email">Email address</label>
          <input name="email" type="email" className="form-control form-control-sm" id="example-email" aria-describedby="emailHelp" placeholder="Enter email"></input>
      </div>
      <div className="form-group">
          <label for="name">Name</label>
          <input name="from_name" type="name" className="form-control form-control-sm" id="name" aria-describedby="name" placeholder="Enter name"></input>
      </div>
      <div class="form-group">
          <label for="text-area">Message</label>
          <textarea name="message" rows="8" className="form-control form-control-sm" id="text-area" placeholder="Message goes here..."></textarea>
      </div>
      <button type="submit" value="Send" className="btn submit-button">Submit</button>
    </form>
  );
}

export default Form;