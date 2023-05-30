import React from "react";
import boxe from "../img/young-fitness-man-studio.avif";
import pesi from "../img/young-muscular-athlete-practicing-gym-with-weights_155003-35492.avif";
import sala from "../img/sportswoman-training-abs-with-ball-gym_651396-623.avif";
import Carousel from "react-bootstrap/Carousel";
import "../style/first_section.css";

function IndividualIntervalsExample() {
  return (
    <Carousel prevIcon="" nextIcon="" indicators={false}>
      <Carousel.Item interval={4000} className="first-section">
        <img className="d-block w-100 h-100" src={boxe} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={4000} className="first-section">
        <img className="d-block w-100 h-100" src={sala} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={4000} className="first-section">
        <img className="d-block w-100 h-100" src={pesi} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
