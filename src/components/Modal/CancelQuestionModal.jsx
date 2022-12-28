import React from "react";
import "../../styles/common/global.css";
import question from "../../assets/images/question.svg";

import { useNavigate } from "react-router-dom";

const CancelQuestionModal = () => {
  const navigate = useNavigate();

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-body d-flex flex-column ">
            <div className="d-flex flex-row justify-content-end">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-evenly px-5 py-3">
              <img src={question} alt="question-imgae" />
              <p className="fw-sb fs-24 text-center">
                Are you sure you want to exit? Your data will not be saved if
                you exit now.
              </p>
              <p
                className="fw-r fs-18 text-center"
                style={{ color: "#6C757D" }}
              >
                Press YES to continue and come back later to complete your
                profile, or Cancel to stay on the current page
              </p>
              <div className="d-flex flex-row justify-content-center">
                <button
                  className="button-layout button-outlined mx-3"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>

                <button
                  className="button-layout button-green mx-3 a-tag-green-btn"
                  onClick={() => {
                    navigate("/");
                  }}
                  data-bs-dismiss="modal"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelQuestionModal;
