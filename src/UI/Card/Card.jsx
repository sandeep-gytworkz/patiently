import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div
      className="d-flex flex-row "
      style={{
        backgroundColor: "red",
        height: "85%",
        width: "70%",
        marginLeft: "15%",
        marginTop: "3%",
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
