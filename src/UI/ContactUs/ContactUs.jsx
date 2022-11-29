import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { FaTimes } from 'react-icons/fa';

const ContactUs = (props) => {
  return (
    <div className={"d-flex flex-column homePage-container animate__animated p-5 " + (props.showContactUs ? "animate__slideInRight" : "animate__slideOutRight")} style={{position:'fixed', right:0, top:0, backgroundColor:'#029C9A', width:'50%'}}>
      <div class="container-fluid text-left">
        <div class="row content-section">
            <h2 className="text-center"> Contact Us } </h2>
            <FaTimes onClick={props.toggleContactUs} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
