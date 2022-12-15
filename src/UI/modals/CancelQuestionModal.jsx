import React from "react";
import "../../styles/common/global.css";

const CancelQuestionModal = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            {/* <h5 className="modal-title">Modal title</h5> */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="fw-sb fs-24">
              Are you sure you want to exit? Your data will not be saved if you
              exit now.
            </p>
            <p className="fw-r fs-18">
              Press YES to continue and come back later to complete your
              profile, or Cancel to stay on the current page
            </p>
            <div className="d-flex flex-row">
              <button className="button-layout button-outlined">Cancel</button>
              <button className="button-layout button-green">Yes</button>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelQuestionModal;
