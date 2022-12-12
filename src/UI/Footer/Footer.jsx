import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div
      className={`d-flex align-items-center ${
        props.home ? "footer-home " : "footer"
      }`}
    >
      <Link
        to="/contact-us"
        className={`a-tag-common fs-16 ${props.home ? "a-tag-white" : " "}`}
      >
        Contact us
      </Link>
      <span className="mx-2 "> | </span>
      <a className={`fs-16 a-tag-common ${props.home ? "a-tag-white" : " "}`}>
        Privacy Policy / Cookie Settings
      </a>
    </div>
  );
};

export default Footer;
