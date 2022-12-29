import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import homePageCircle from "../../assets/images/homePageCircle.svg";

import "./Home.css";
import homeImg from "../../assets/images/homeImg.png";
import "../../styles/common/global.css";
import arrow from "../../assets/images/arrow.svg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import rightBlackArrow from "../../assets/images/rightBlackArrow.svg";

const Homepage = () => {
  const [cookieState, setCookieState] = useState(false);

  const setCookie = () => {
    setCookieState(true);
    localStorage.setItem("cookieSet", "true");
  };

  useEffect(() => {
    let cookieSet = localStorage.getItem("cookieSet");
    if (cookieSet) {
      setCookieState(true);
    }
  }, []);

  return (
    <div className="d-flex flex-column homePage-container">
      <Header />
      <div className="bg-green row pt-sm-4 pt-3 h-80">
        <div className=" col-xs-12 col-sm-6 offset-sm-1 py-sm-5 ps-sm-1 pe-sm-5 py-5">
          <div className="px-4 px-sm-0 mb-5 mb-sm-0 ">
            <p className="fs-64 fw-sb heading-shadow mb-sm-4 mb-4 lh-mainHeading">
              Bringing the Patient Journey to Life
            </p>
            <p className="fs-28 fw-m mb-sm-5 mb-5 lh-subHeading">
              Your celiac health journey is unique, but you are not alone. Join
              a community of fellow celiac patients, share your experience, be
              part of the solution.
            </p>
            <Link
              to="/participate-now "
              className="button-layout a-tag-white-btn fs-18 fw-sb "
            >
              Participate Now
              <img src={rightBlackArrow} alt="right-arrow" className="ps-4" />
            </Link>
          </div>

          <div className="px-0  col-12">
            <Footer home={true} alignment="justify-content-start" />
          </div>
        </div>
        <div className=" col-xs-12 col-sm-5 d-none d-sm-flex homepageCircle-div h-100 ps-5 justify-content-end">
          <img
            src={homePageCircle}
            alt="home page circles image"
            className="homepage-circle"
          />
        </div>
      </div>

      {!cookieState && (
        <div className=" cookies-banner col-12">
          <div className="  cookies-banner-main d-flex  flex-column offset-sm-1  ">
            <div>
              <p>We value your privacy</p>
              <p className="text-align-justify">
                We use cookies to enhance your browsing experience, serve
                personalized ads or content, and analyze our traffic. By
                clicking “Accept All”, you consent to our use of cookies.
              </p>
              <p className="mb-sm-0 mb-2">
                <Link className="a-tag-white" to="/">
                  Read More
                </Link>
              </p>
            </div>
            <div className="d-flex flex-row justify-content-sm-end justify-content-center pe-sm-5 col-12 ">
              <div className="col-sm-6 col-12 flex-wrap justify-content-sm-end d-flex flex-row">
                <button className="button-layout cookie-reject-button fs-16 me-sm-2  order-1 mb-2 col-12 col-sm-3">
                  Manage
                </button>
                <button
                  className="button-layout cookie-reject-button fs-16 me-sm-2 order-2 mb-2 col-12 col-sm-3"
                  onClick={() => {
                    setCookie(false);
                  }}
                >
                  Reject All
                </button>
                <button
                  className="button-layout cookie-accept-button fs-16 order-3 col-12 col-sm-3"
                  onClick={() => {
                    setCookie(true);
                  }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;