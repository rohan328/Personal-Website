import React from "react";
import profileCard from "./profileCard"

function AboutMe() {
  document.title = "Rohan Ohlan"
  return (
    <div className="aboutme">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6">
            {profileCard()}
          </div>
          <div class="col-lg-5">
            <h1>Rohan Ohlan</h1>
            <h5>Computer Engineering Student</h5>
            <h6>San Jose State University</h6>
            <p>
              Hi, I am second year Computer Engineering student at San Jose State University
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
