import React from "react";
import "./Footer.css";
const Footer = ({toggleContactUs}) => {
  return (
    <div className="footer d-flex justify-content-center">
      <a
        className="btn color-secondary"
        onClick={()=>{toggleContactUs()}}
      >
        Contact us
      </a>
      <span className="mx-2 p-2"> | </span>
      <a
        className=" btn color-secondary"
      >
        Privacy Policy / Cookie Settings
      </a>
    </div>
  );
};

export default Footer;
