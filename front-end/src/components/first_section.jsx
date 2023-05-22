import React from "react";
import boxe from "../img/boxe.jpg";
import pesi from "../img/pesi.jpg";
import sala from "../img/sala.jpg";
import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample() {
  return (
    <Carousel prevIcon="" nextIcon="" indicators={false}>
      <Carousel.Item interval={4000} className="first-section">
        <img className="d-block w-100" src={boxe} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={4000} className="first-section">
        <img className="d-block w-100" src={sala} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={4000} className="first-section">
        <img className="d-block w-100" src={pesi} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
