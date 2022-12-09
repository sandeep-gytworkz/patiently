import React from "react";
import Card from "../Card/Card";

export const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">{/* <Card /> */}</div>
          <div className="carousel-item">{/* <Card /> */}</div>
          <div className="carousel-item">{/* <Card /> */}</div>
        </div>
      </div>
    </div>
  );
};
