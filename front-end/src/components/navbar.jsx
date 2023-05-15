import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../Scss/style.css";
import { Link } from "react-router-dom";

function GymNavbar() {
  return (
    <Navbar expand="lg" className="gym-navbar px-5 justify-content-between">
      <Navbar.Brand
        href=""
        className="navbar-brand d-flex align-items-center justify-content-center"
      >
        Palestra XYZ
      </Navbar.Brand>

      <div className="link d-flex align-items-center justify-content-center">
        <div className="d-flex">
          <Link to={"/"} className="nav-link">
            Home
          </Link>
          <Link to={"/centro"} className="nav-link">
            Il nostro centro
          </Link>
          <Link to={"/corsi"} className="nav-link">
            Corsi
          </Link>
          <Link to={"#"} className="nav-link">
            Contatti
          </Link>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Link to={"/login"} className="nav-link end-0">
          Login
        </Link>
      </div>
    </Navbar>
  );
}

export default GymNavbar;
