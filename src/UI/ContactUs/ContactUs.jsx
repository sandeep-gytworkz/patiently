import React from "react";
import Header from "../Header/Header";
import "../../styles/common/global.css";

const ContactUs = () => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <div className="col-12 bg-pink px-5 py-4 mb-2 ">
        <h1>Contact Us</h1>
      </div>
      <div className="d-flex flex-column px-5 ">
        <p className="fs-18 fw-b">
          Have a specific question related to patient.ly HD? Fill out the
          following and you will hear from us soon!
        </p>
        <form className="d-flex flex-column">
          <div className="d-flex flex -row">
            <input placeholder="First Name" type="text" className="px-2 m-2" />
            <input placeholder="Last Name" type="text" className="px-2 m-2" />
          </div>
          <div>
            <input placeholder="Email" type="email" className="px-2 m-2" />
          </div>
          <div>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                I have a question about participating
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    I no longer want to participate
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    I need help uploading my records
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    I have a general question
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p>Message</p>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
