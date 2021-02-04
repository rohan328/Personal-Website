import React from "react";
import {Link} from "react-router-dom";
import "./css/Navigation.css"



class Navigation extends React.Component {

  constructor(){
    super()
    this.myFunction = this.myFunction.bind(this);

  }

  myFunction() {
    var x = document.getElementById("topNav");
    var menu = document.getElementById("menu");
    if(window.getComputedStyle(menu).display !== "none"){
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
        <div className="navbar">

          <div className="nav-title">
            <Link className="navTitleText" to="/">
              Rohan Ohlan
            </Link>
          </div>

          <div className="nav-links">
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 384" enableBackground="new 0 0 384 384;"
                onClick={this.myFunction} className="icon" id="menu">
                <rect x="0" y="277.333" width="384" height="42.667" fill="white"/>
                <rect x="0" y="170.667" width="384" height="42.667" fill="white"/>
                <rect x="0" y="64" width="384" height="42.667" fill="white"/>
              </svg>

              <Link className="nav-link" to="/resume" onClick={this.myFunction}>
                Resume
              </Link>

              <Link className="nav-link" to="/projects" onClick={this.myFunction}>
                Projects
              </Link>

              <Link className="nav-link" to="/contact" onClick={this.myFunction}>
                Contact
              </Link>

          </div>

          <a id="download" href="resume.pdf" download>
              <img src="images/download.svg" height='50px' alt="download button"/>
          </a>
        </div>
    </div>
  );
  }
}



export default Navigation;
