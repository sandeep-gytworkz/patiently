import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = (props) => {
  return (
    <>
      <div
        className={`d-flex align-items-center  d-none d-sm-block ${ props.home ? "footer-home " : "footer" } ${props.alignment}`}
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
        className={`d-flex align-items-center d-block d-sm-none bg-white text-dark p-2`}
      >
        <Link
          to="/contact-us"
          className={`a-tag-common text-center fw-m fs-12 col-4 text-dark`}
        >
          Contact us
        </Link>
        <span className="mx-2 "> | </span>
        <a
          className={`fs-12  fw-m a-tag-common text-center col-8 text-dark`}
        >
          Privacy Policy / Cookie Settings
        </a>
      </div>
    </>
  );
};

export default Footer;
