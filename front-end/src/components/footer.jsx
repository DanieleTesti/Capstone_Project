import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
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
          <div className="row">
            <div className="col-md-6">
              <p className="footer__copy">
                &copy; 2023 Palestra. Tutti i diritti riservati.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="footer__links">
                <li>
                  <a href="#">Termini e condizioni</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Mappa del sito</a>
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
