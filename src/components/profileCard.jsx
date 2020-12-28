import React from "react"
import "./css/profileCard.css"
import SocialBar from "./SocialBar"

function profileCard(color="black"){
  return(
    <div className="profileCard">
      <img
          className="profileCardImage"
          src="./images/profile.jpg"
          width='200px'
          alt="profile"/>
      <div className="detailsContainerProfileCard">
        <h1><b>Rohan Ohlan</b></h1>
        <p className="title">Computer Engineering Student
                      <br/>San Jose State University
        </p>
        {SocialBar(color)}
      </div>
    </div>
  );
}

export default profileCard;
