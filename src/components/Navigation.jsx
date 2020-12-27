import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./css/Navigation.css"



class Navigation extends React.Component {

  constructor(){
    super()
    this.myFunction = this.myFunction.bind(this);

  }

  myFunction() {
    var x = document.getElementById("topNav");
    var menu = document.getElementById("menu");
    if(window.getComputedStyle(menu).display != "none"){
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }

  render() {
    return(
      <div className="topnav" id="topNav">
        <div class="navbar">

          <div class="nav-title">
            <Link class="navTitleText" to="/">
              Rohan Ohlan
            </Link>
          </div>

          <div class="nav-links">
            <a href="javascript:void(0)" onClick={this.myFunction} class="icon" id="menu">
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 384" enable-background="new 0 0 384 384;">
                <rect x="0" y="277.333" width="384" height="42.667" fill="white"/>
                <rect x="0" y="170.667" width="384" height="42.667" fill="white"/>
                <rect x="0" y="64" width="384" height="42.667" fill="white"/>
              </svg>

            </a>


            <Link class="nav-link" to="/resume" onClick={this.myFunction}>
              Resume
            </Link>

            <Link class="nav-link" to="/projects" onClick={this.myFunction}>
              Projects
            </Link>

            <Link class="nav-link" to="/contact" onClick={this.myFunction}>
              Contact
            </Link>

          </div>
        </div>
    </div>
  );
  }
}



export default withRouter(Navigation);
