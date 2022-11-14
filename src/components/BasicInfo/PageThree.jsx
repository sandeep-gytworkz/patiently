import React from "react";
import BackgroundCard from "../../UI/Card/BackgroundCard";
import Card from "../../UI/Card/Card";

const PageThree = () => {
  return (
    <BackgroundCard>
      <Card>
        <div className="d-flex flex-column m-5">
          <h2>QUESTION 1 OF 4</h2>
          <h2>Please Select the age group that applies to you</h2>
          <div style={{ height: "60%" }}>
            <div className="d-flex flex-row m-2">
              <button type="button" class="btn btn-outline-secondary">
                18 to 64
              </button>
              <button type="button" class="btn btn-outline-secondary">
                65 or Older
              </button>
            </div>
          </div>
          <div className="d-flex flex-row">
            <a href="#">Cancel</a>
            <a href="#">Break</a>
            <button type="button" class="btn btn-success">
              Next Question
            </button>
          </div>
        </div>
      </Card>
    </BackgroundCard>
  );
};

export default PageThree;
