import React from "react";
import dataPrivacy1 from "../../assets/images/dataPrivacy1.png";
import dataPrivacy2 from "../../assets/images/dataPrivacy2.png";
import dataPrivacy3 from "../../assets/images/dataPrivacy3.png";
import "./DataPrivacy.css";
import "../../styles/common/global.css";
import Header from "../../UI/Header/Header";

const DataPrivacy = () => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <div className="col-12 bg-pink px-5 py-4 mb-2 ">
        <h1>Data Privacy</h1>
      </div>
      <div className="d-flex flex-column px-5 ">
        <div className="d-flex flex-row my-2">
          <div>
            <img src={dataPrivacy1} alt="data-privacy-image" />
          </div>
          <div className="data-container">
            <div className="col-8 px-4 py-2">
              <p className="fs-20 fw-b">De-identification</p>
              <p className="fs-18">
                All data shared with researchers is de-identified (no names,
                addresses, phone numbers, etc.) so that the data cannot be
                connected back to an individual.​
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row my-2">
          <div>
            <img src={dataPrivacy2} alt="data-privacy-image" />
          </div>
          <div className="data-container">
            <div className="col-8 px-4 py-2">
              <p className="fs-20 fw-b">Encryption</p>
              <p className="fs-18">
                All data shared with researchers is de-identified (no names,
                addresses, phone numbers, etc.) so that the data cannot be
                connected back to an individual.​
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row my-2">
          <div>
            <img src={dataPrivacy3} alt="data-privacy-image" />
          </div>
          <div className="data-container">
            <div className="col-8 px-4 py-2">
              <p className="fs-20 fw-b">Confidentiality​</p>
              <p className="fs-18">
                all data shared with researchers is de-identified (no names,
                addresses, phone numbers, etc.) so that the data cannot be
                connected back to an individual.​
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPrivacy;
