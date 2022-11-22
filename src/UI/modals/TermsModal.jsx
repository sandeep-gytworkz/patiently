import React from "react";

const TermsModal = (props) => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex="-1"
        aria-labelledby="exampleModalLongTitle"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Terms & Conditions
              </h5>
            </div>
            <div className="modal-body" style={{ minHeight: "1500px" }}>
              <p>
                This is some placeholder content to show the scrolling behavior
                for modals. Instead of repeating the text the modal, we use an
                inline style set a minimum height, thereby extending the length
                of the overall modal and demonstrating the overflow scrolling.
                When content becomes longer than the height of the viewport,
                scrolling will move the modal as needed.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={props.stateChanger}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsModal;
