import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-start">
      <Link to="/contact-us" className="a-tag-common">
        Contact us
      </Link>
      <span className="mx-2 "> | </span>
      <a>Privacy Policy / Cookie Settings</a>
    </div>
  );
};

export default Footer;
