import React from "react";
import SocialBar from "./SocialBar"

function Footer() {
  return (
      <footer className="footer bg-dark">
        <div class="container">
          <p class="m-1 text-center text-white">
            {SocialBar("white")}
            Copyright &copy; Rohan Ohlan 2020
          </p>
        </div>
    </footer>
  );
}

export default Footer;
