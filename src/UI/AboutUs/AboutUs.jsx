import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';

const ContactUs = ({toggleAboutUs, showAboutUs}) => {
  return (
    <div className={"d-flex flex-column col-xs-12 col-sm-6 h-100 animate__animated p-5 " + (showAboutUs ? "animate__slideInRight" : "animate__slideOutRight")} 
      style={{position:'fixed', right:0, top:0, backgroundColor:'#029C9A'}}>
      <FaTimes onClick={toggleAboutUs} className="close-icon text-white" fontSize={20}/>
      <div class="container-fluid text-left">
        <div class="row content-section">
            <h2 className="text-left text-white page-header col-12 mt-3 mb-5"> About Us </h2>
            <p className="text-white">
              Treat your about page as an introduction to your customers. 
              Share who you are, why you started the brand, your vision and mission and how you plan to grow your brand. 
              Consider this as your store's resume that you need to keep updated at all times. 
              The more you share about yourself, the closer your customers will feel to your brand.
            </p>
            <p className="text-white">
              We know how tough it is when it comes to writing about yourelf. 
              So we suggest you start with a set of points that you'd like your customers to know about you. 
              Then create simple questions around them like you're interviewing yourself, and start jotting down your answers. 
              You could also consider getting an about us page written by a copywriter. 
              But remember not to lose your personality there.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
