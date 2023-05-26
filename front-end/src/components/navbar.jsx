import React, { useState } from "react";
import { Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_CLIENTE } from "../Redux/ActionTypes/clienteAction";
import "../style/navbar.css";

function GymNavbar() {
  const cliente = useSelector((state) => state.cliente);
  const utenteRole = useSelector((state) => state.cliente?.cliente?.roles);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: FETCH_CLIENTE,
      payload: {},
    });
    navigate("/login");
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expand="lg"
      className="gym-navbar px-5 justify-content-between"
      expanded={expanded}
    >
      <Navbar.Brand className="navbar-brand d-flex align-items-center justify-content-center">
        Palestra XYZ
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarNav" onClick={handleToggle} />

      <Navbar.Collapse className="navbarNav justify-content-around">
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
            {utenteRole?.map((role) =>
              role?.roleName === "ROLE_ADMIN" ? (
                <Link key={role?.id} to="/clienti" className="nav-link">
                  Clienti
                </Link>
              ) : (
                role?.roleName !== "ROLE_ADMIN" && (
                  <Link key={role?.id} to="corsiPage" className="nav-link">
                    I nostri corsi
                  </Link>
                )
              )
            )}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="justify-content-between">
            {cliente?.clienteFetch?.username ? (
              <>
                <strong className="text-white">
                  Benvenuto {cliente?.clienteFetch?.username}
                </strong>

                <NavDropdown.Item
                  href="/logout"
                  onClick={handleSubmit}
                  className="text-white justify-content-end"
                >
                  Esci
                </NavDropdown.Item>
              </>
            ) : (
              <Link to={"/login"} className="nav-link end-0">
                Login
              </Link>
            )}
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default GymNavbar;
