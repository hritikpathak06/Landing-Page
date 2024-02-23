import React from "react";
import "./Footer.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sub__footer">
        <div className="first_footer">
          <h2>Categories</h2>
          <ul>
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>
        <div className="second__footer">
          <h2>Contact</h2>
          <ul>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
        <div className="third__footer">
          <h2>United States</h2>
          <span>
            <MdKeyboardArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
