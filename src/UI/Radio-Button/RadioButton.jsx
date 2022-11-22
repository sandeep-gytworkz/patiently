import React from "react";

const RadioButton = () => {
  return (
    <div className="d-flex flex-row" style={{ height: "15%" }}>
      <div className="content-area col-10 h-100 offset-sm-1">
        <div
          class="btn-toolbar justify-content-between"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <h3 className="text-center col-12 pt-5">Basic Info</h3>
          <div class="btn-group mx-auto" role="group" aria-label="First group">
            <button type="button" class="btn btn-secondary active">
              &#11044;
            </button>
            <button type="button" class="btn btn-secondary">
              &#11044;
            </button>
            <button type="button" class="btn btn-secondary">
              &#11044;
            </button>
            <button type="button" class="btn btn-secondary">
              &#11044;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioButton;
