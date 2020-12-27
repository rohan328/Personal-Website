import React from "react"
import "./css/profileCard.css"
import SocialBar from "./SocialBar"

function profileCard(color="black"){
  return(
    <div class="profileCard">
      <img class="profileCardImage" src="./images/profile.jpg" width='200px'/>
      <div class="detailsContainerProfileCard">
        <h1><b>Rohan Ohlan</b></h1>
        <p class="title">Computer Engineering Student
                      <br/>San Jose State University
        </p>
        {SocialBar(color)}
      </div>
    </div>
  );
}

export default profileCard;
