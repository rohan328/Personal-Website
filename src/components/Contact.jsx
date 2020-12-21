import React from "react";
import SocialBar from "./SocialBar"

function Contact() {
  document.title="Contact"
  return (
    <div className="contact">
      <div class="container">

        <div>
          <br/><br/>
          <h1 align="center"><b>Contact</b></h1>
        </div>
        <font size = "5">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            Email: <a href="mailto:rohan@rohan328.com"
                      target="_blank"
                      rel="noreferrer">rohan@rohan328.com</a>
          </div>

          <div class="col-lg-5">
            <p>Connect on social media:</p>
            {SocialBar()}
          </div>
        </div>
        </font>
      </div>
    </div>
  );
}

export default Contact;
