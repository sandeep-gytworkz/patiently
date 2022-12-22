import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = (props) => {
  return (
    <>
      <div
        className={`d-flex align-items-center  d-none d-sm-block ${
          props.home ? "footer-home " : "footer"
        } ${props.alignment}`}
      >
        <Link
          to="/contact-us"
          className={`a-tag-common fw-m fs-16 ${
            props.home ? "a-tag-white" : " "
          }`}
        >
          Contact us
        </Link>
        <span className="mx-2 "> | </span>
        <a
          className={`fs-16  fw-m a-tag-common ${
            props.home ? "a-tag-white" : " "
          }`}
        >
          Privacy Policy / Cookie Settings
        </a>
      </div>
      <div
        className={`d-flex align-items-center footer-sm d-block d-sm-none ${
          props.home ? "bg-white text-dark" : "bg-dark text-white"
        } p-2`}
      >
        <Link
          to="/contact-us"
          className={`a-tag-common text-center fw-m fs-12 col-4  ${
            props.home ? " text-dark" : "text-white"
          }`}
        >
          Contact Us
        </Link>
        <span className="mx-2 "> | </span>
        <a
          className={`fs-12  fw-m a-tag-common text-center col-8  ${
            props.home ? " text-dark" : "text-white"
          }`}
        >
          Privacy Policy / Cookie Settings
        </a>
      </div>
    </>
  );
};

export default Footer;
