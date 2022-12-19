import React from "react";
import dataPrivacy1 from "../../assets/images/dataPrivacy1.png";
import dataPrivacy2 from "../../assets/images/dataPrivacy2.png";
import dataPrivacy3 from "../../assets/images/dataPrivacy3.png";
import "./DataPrivacy.css";
import "../../styles/common/global.css";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";

const DataPrivacy = () => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <div className="col-12 bg-pink px-5 py-4 mb-2 ">
        <h1 className="p-l-3 fw-sb">Data Privacy</h1>
      </div>
      <div className="d-flex flex-column px-5 ">
        <div className="row my-2 p-l-3 p-r-2 ">
          <div className="col-sm-2 col-12 p-0">
            <img src={dataPrivacy1} alt="data-privacy-image" />
          </div>
          <div className="data-container col-sm-10 col-12 p-0">
            <div className="col-8 px-4 py-2">
              <p className="fs-20 fw-sb mb-1 pt-2">De-identification</p>
              <p className="fs-18 fw-r">
                All data shared with researchers is de-identified (no names,
                addresses, phone numbers, etc.) so that the data cannot be
                connected back to an individual.​
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row my-2 p-l-3 p-r-2 ">
          <div>
            <img src={dataPrivacy2} alt="data-privacy-image" />
          </div>
          <div className="data-container">
            <div className="col-8 px-4 py-2">
              <p className="fs-20 fw-sb mb-1 pt-2">Encryption</p>
              <p className="fs-18 fw-r">
                All data shared with researchers is de-identified (no names,
                addresses, phone numbers, etc.) so that the data cannot be
                connected back to an individual.​
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row my-2 p-l-3 p-r-2 ">
          <div>
            <img src={dataPrivacy3} alt="data-privacy-image" />
          </div>
          <div className="data-container">
            <div className="col-8 px-4 py-2">
              <p className="fs-20 fw-sb mb-1 pt-2">Confidentiality​</p>
              <p className="fs-18 fw-r">
                all data shared with researchers is de-identified (no names,
                addresses, phone numbers, etc.) so that the data cannot be
                connected back to an individual.​
              </p>
            </div>
          </div>
        </div>
        <div className="p-l-3 p-r-2 ">
          <Footer alignment="justify-content-start" />
        </div>
      </div>
    </div>
  );
};

export default DataPrivacy;
