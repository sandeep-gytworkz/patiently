import React from "react";
import WhiteCard from "../../../components/Card/WhiteCard";
import CancelQuestionModal from "../../../components/Modal/CancelQuestionModal";

const Questions = (props) => {
  return (
    <>
      <CancelQuestionModal />
      <WhiteCard>
        <div className="col-sm-8 col-10 d-flex flex-column align-items-center justify-content-evenly">
          <div className="py-2">
            <p className="dark-blue fw-b fs-48 mb-0 text-center">
              Hi <span className="pink">first name</span>, we're so glad you're
              here!
            </p>
          </div>
          <div>
            <p className="fs-24 fw-r py-2 text-center">
              We need to ask you a couple questions to set up your Patiently
              profile
            </p>
          </div>
          <div className="d-flex flex-row py-2 col-12 justify-content-center flex-wrap-reverse">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-backdrop="false"
              className="button-layout button-outlined mx-2  col-sm-3 col-12 mb-3"
            >
              Cancel
            </button>
            <button
              className="mx-2 button-green button-layout col-sm-3 col-12 mb-3"
              onClick={() => {
                props.changeSlide(4);
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </WhiteCard>
    </>
  );
};

export default Questions;
