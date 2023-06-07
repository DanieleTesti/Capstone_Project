import React from "react";
import "../style/footer.css";
import linkedin from "../img/linkedin.png";
import { Image } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container-footer">
          <div className="row d-flex flex-row justify-content-around mx-0">
            <div className="col-md-4 ">
              <h3 className="footer__title">Contatti</h3>
              <p className="footer__address">
                Via Palestra, 123
                <br />
                Città, CAP
                <br />
                Telefono: 123-456789
                <br />
                Email: info@palestra.com
              </p>
            </div>
            <div className="col-md-4">
              <h3 className="footer__title">Orari di apertura</h3>
              <p className="footer__opening-hours">
                Lunedì - Venerdì: 6:00 - 22:00
                <br />
                Sabato: 8:00 - 20:00
                <br />
                Domenica: Chiuso
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container-footer">
          <div className="row mx-5">
            <div className="col-md-6 ">
              <p className="footer__copy">
                &copy; 2023 Palestra. Tutti i diritti riservati.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="footer__links">
                <li>
                  <strong>
                    <a href="https://www.linkedin.com/in/daniele-testi-3a3138268/">
                      LinkedIn
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>
                    <a href="https://github.com/DanieleTesti?tab=repositories">
                      GitHub
                    </a>
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
