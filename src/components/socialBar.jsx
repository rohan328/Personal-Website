import React from "react"
import "./css/socialBar.css"

function socialBar(){
  return(
    <div class="socialBar">
      <a
        href="https://www.github.com/rohan328"
        target="_blank">
        <img class="socialBarIcon" src="./images/github.svg"/>
      </a>
      <a
        href="https://www.linkedin.com/in/rohanohlan"
        target="_blank">
        <img class="socialBarIcon" src="./images/linkedin.svg"/>
      </a>
      <a href="https://www.instagram.com/ohlanrohan"
        target="_blank">
        <img class="socialBarIcon" src="./images/instagram.svg" />
      </a>
      <a href="https://www.twitter.com/ohlanrohan"
        target="_blank">
        <img class="socialBarIcon" src="./images/twitter.svg" />
      </a>
      <a href="https://www.facebook.com/rohan328"
        target="_blank">
        <img class="socialBarIcon" src="./images/facebook.svg" />
      </a>
    </div>
  );
}

export default socialBar;
