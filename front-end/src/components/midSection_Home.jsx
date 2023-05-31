import { Container, Row, Col, Image } from "react-bootstrap";
import promo from "../img/copertina-sito-500x315.png";
import yoga from "../img/yoga.webp";
import karate from "../img/karate.webp";
import nuoto from "../img/nuoto.jpeg";
import { Link } from "react-router-dom";
import "../style/midSection.css";
import sportAcquatici from "../img/acqua.jpg";
import fitness from "../img/fitnes.jpg";
import arti_marziali from "../img/arti_maziali.jpg";

function PromotionsSection() {
  return (
    <Container className="text-center">
      <Col>
        <h2>Promozioni in corso</h2>
      </Col>
      <Col>
        <Image src={promo} alt="Promotion Image" fluid />
      </Col>
    </Container>
  );
}
function CoursesSection() {
  return (
    <div className="courses d-flex" style={{ justifyContent: "center" }}>
      <div>
        <div>
          <h2>I nostri corsi</h2>
          <Row>
            <Col style={{ position: "relative", padding: "0px" }} md={4}>
              <Link to="/centro" className="collegamenti">
                <Image
                  src={yoga}
                  alt="yoga Image 1"
                  fluid
                  style={{ height: " 380px", width: "100%" }}
                  className="corsi"
                />
                <div
                  style={{
                    position: "absolute",
                    justifyContent: "center",
                    alignConten: "center",
                    top: "140px",
                  }}
                  className="descrizione_corsi"
                >
                  <h3>Corso di Yoga</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </Link>
            </Col>
            <Col md={4} style={{ position: "relative", padding: "0px" }}>
              <Link to="/centro" className="collegamenti">
                <Image
                  src={karate}
                  alt="karate Image 2"
                  fluid
                  style={{ height: " 380px", width: "100%" }}
                  className="corsi"
                />
                <div
                  style={{
                    position: "absolute",
                    justifyContent: "center",
                    alignConten: "center",
                    top: "140px",
                  }}
                  className="descrizione_corsi"
                >
                  <h3>Corso di Karate</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </Link>
            </Col>
            <Col style={{ position: "relative", padding: "0px" }} md={4}>
              <Link to="/centro" className="collegamenti">
                <Image
                  src={nuoto}
                  alt="nuoto Image 3"
                  fluid
                  style={{ height: " 380px", width: "100%" }}
                  className="corsi"
                />
                <div
                  style={{
                    position: "absolute",
                    justifyContent: "center",
                    alignConten: "center",
                    top: "140px",
                  }}
                  className="descrizione_corsi"
                >
                  <h3>Corso di Nuoto</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

function SecondSection() {
  return (
    <>
      <div style={{}}>
        <div className="d-flex  sport_vari">
          <div style={{ width: "50%" }} className="photo">
            <Image src={sportAcquatici} alt="sportAcquatici" fluid />
          </div>
          <div className="px-3 description" style={{ width: "50%" }}>
            <div className="d-flex flex-column align-items-center">
              {" "}
              <h1
                style={{ position: "absolute", paddingTop: "3rem" }}
                className="course_name"
              >
                SPORT ACQUATICI
              </h1>
              <h1 style={{ color: "lightgray", fontSize: "150px" }}>01</h1>
            </div>
            <p>
              Due Piscine interne ed una esterna. La principale, 6 corsie x 25
              mt., dedicata al nuoto libero e all'acquagym, ospita anche
              attività di scuola nuoto e di pallanuoto agonistica. La seconda,
              più piccola, è dedicata ad attività di fitness in acqua più
              specifiche e alla scuola nuoto per i più piccini. La piscina
              esterna è attiva nel periodo estivo per il relax e l'attività di
              adulti e bambini.
            </p>
            <Link to="/corsiPage">
              <button>Scopri di più | ➡️</button>
            </Link>
          </div>
        </div>
        <div className="d-flex  sport_vari">
          <div className="px-3 description" style={{ width: "50%" }}>
            <div className="d-flex flex-column align-items-center">
              {" "}
              <h1
                style={{ position: "absolute", paddingTop: "3rem" }}
                className="course_name"
              >
                FITNESS
              </h1>
              <h1 style={{ color: "lightgray", fontSize: "150px" }}>02</h1>
            </div>
            <p>
              Una sala pesi completa di tutte le attrezzature per il tuo
              allenamento e quattro sale dove svolgere tutte le lezioni di
              fitness insieme ai migliori insegnanti.
            </p>
            <Link to="/corsiPage">
              <button>Scopri di più | ➡️</button>
            </Link>
          </div>
          <div style={{ width: "50%" }} className="photo">
            <Image src={fitness} alt="fitness" fluid />
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex  sport_vari">
            <div style={{ width: "50%" }} className="photo">
              <Image src={arti_marziali} alt="arti_marziali" fluid />
            </div>
            <div className="px-3 description" style={{ width: "50%" }}>
              <div className="d-flex flex-column align-items-center">
                <h1
                  style={{ position: "absolute", paddingTop: "3rem" }}
                  className="course_name justify-content-center"
                >
                  ARTI MARZIALI
                </h1>
                <h1 style={{ color: "lightgray", fontSize: "150px" }}>03</h1>
              </div>
              <p>Karate e Kick Boxing per adulti e bambini.</p>
              <Link to="/corsiPage">
                <button>Scopri di più | ➡️</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function GymPage() {
  return (
    <>
      <PromotionsSection />
      <br />
      <CoursesSection />
      <br />
      <SecondSection />
    </>
  );
}

export default GymPage;
