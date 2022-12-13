import React from "react";
import Header from "../Header/Header";
import "../../styles/common/global.css";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <div className="col-12 bg-pink px-5 py-4 mb-2 ">
        <h1 className="p-l-3 fw-sb">Contact Us</h1>
      </div>
      <div className="col-12 d-flex flex-row px-5">
        <div className="d-flex flex-column p-l-3 p-r-2 col-7">
          <p className="fs-18 fw-m">
            Have a specific question related to patient.ly HD? Fill out the
            following and you will hear from us soon!
          </p>
          <form className="d-flex flex-column  ">
            <div className="d-flex flex -row col-12 justify-content-between">
              <input
                placeholder="First Name"
                type="text"
                className="px-2 my-2 col-5 py-1"
              />
              <input
                placeholder="Last Name"
                type="text"
                className="px-2  my-2 col-5 py-1"
              />
            </div>
            <div>
              <input
                placeholder="Email"
                type="email"
                className="px-2 my-2 col-5 py-1"
              />
            </div>

            <div className="dropdown col-12 my-2">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected value="I have a question about participating">
                  I have a question about participating
                </option>

                <option value=" I no longer want to participate">
                  I no longer want to participate
                </option>
                <option value="I need help uploading my records">
                  I need help uploading my records
                </option>

                <option value="I have a general question">
                  I have a general question
                </option>
              </select>
            </div>

            <textarea className="col-12 msg-div my-2 " placeholder="Message" />
            <div className="d-flex flex-row justify-content-end my-2">
              <button className="button-layout button-green">Submit</button>
            </div>
          </form>
        </div>
        <div className="col-5">
          <p className="fs-18 fw-m">Contact Email</p>
          <a>info@patientlyhd.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
