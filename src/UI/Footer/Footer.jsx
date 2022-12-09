import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-center align-items-center">
      <Link to="/contact-us" className="a-tag-common fs-14">
        Contact us
      </Link>
      <span className="mx-2 "> | </span>
      <a className="fs-14 a-tag-common">Privacy Policy / Cookie Settings</a>
    </div>
  );
};

export default Footer;
