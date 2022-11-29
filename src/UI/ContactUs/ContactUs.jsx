import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';

const ContactUs = ({toggleContactUs, showContactUs}) => {
  return (
    <div className={"d-flex flex-column col-xs-12 col-sm-6 h-100 animate__animated p-5 " + (showContactUs ? "animate__slideInRight" : "animate__slideOutRight")} 
      style={{position:'fixed', right:0, top:0, backgroundColor:'#029C9A'}}>
      <FaTimes onClick={toggleContactUs} className="close-icon text-white" fontSize={20}/>
      <div class="container-fluid text-left">
        <div class="row content-section justify-content-end">
            <h2 className="text-left text-white page-header col-12 mt-3 mb-5"> Contact Us </h2>
            <div class="mb-3">
              <input type="text" class="form-control p-3 rounded-2" id="contact-name" placeholder="Enter Name" />
            </div>
            <div class="mb-3">
              <input type="email" class="form-control p-3 rounded-2" id="contact-email" placeholder="Enter Email" />
            </div>
            <div class="mb-3">
              <textarea class="form-control" id="contact-message" rows="6" placeholder="Enter Message"></textarea>
            </div>
            <button className="btn button-primary col-sm-3 mx-3" aria-current="page"> Send </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
