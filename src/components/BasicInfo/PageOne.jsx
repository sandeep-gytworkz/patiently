import React from "react";
import BackgroundCard from "../../UI/Card/BackgroundCard";
import Card from "../../UI/Card/Card";
import homeImg from "../../assets/images/homeImg.png";
const PageOne = () => {
  return (
    <BackgroundCard>
      <Card>
        <div style={{ backgroundColor: "pink", height: "90%", width: "40%" }}>
          <img
            src={homeImg}
            alt="home page logo"
            style={{ height: "70%", marginTop: "15%", marginLeft: "15%" }}
          />
        </div>
        <div style={{ backgroundColor: "yellow", height: "90%", width: "60%" }}>
          <h3 style={{ padding: "0.75rem" }}>Register your account with us</h3>
          <form>
            <div className="d-flex flex-row ">
              <div className="mb-3 p-2  ">
                <label for="firstName" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="mb-3 p-2 ">
                <label for="lastName" className="form-label">
                  Last Name
                </label>
                <input type="text" className="form-control" id="inputEmail" />
              </div>
            </div>
            <div className="d-flex flex-row p-2">
              <div className="mb-3 p-2">
                <label for="inputEmail" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="inputEmail" />
              </div>
              <div className="mb-3 p-2">
                <label for="inputPassword" className="form-label">
                  Contact Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <div className="ms-3 mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="check" />
              <label className="form-check-label" for="check">
                I Agree, I have read and agree to the Terms
              </label>
            </div>
            <div className="ms-3">
              <button type="submit" className="btn btn-primary btn-lg ">
                Continue to register
              </button>
            </div>
          </form>
        </div>
      </Card>
    </BackgroundCard>
  );
};

export default PageOne;
