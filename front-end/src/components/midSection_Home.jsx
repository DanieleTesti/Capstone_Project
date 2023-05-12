import { Container, Row, Col, Image, Button } from "react-bootstrap";
import promo from "../img/copertina-sito-500x315.png";
import yoga from "../img/yoga.webp";
import karate from "../img/karate.webp";
import nuoto from "../img/nuoto.jpeg";

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
              >
                <h3>Corso di Yoga</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                {/* <Button variant="primary">Scopri di più</Button> */}
              </div>
            </Col>
            <Col md={4} style={{ position: "relative", padding: "0px" }}>
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
              >
                <h3>Corso di Karate</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                {/* <Button variant="primary">Scopri di più</Button> */}
              </div>
            </Col>
            <Col style={{ position: "relative", padding: "0px" }} md={4}>
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
              >
                <h3>Corso di Nuoto</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                {/* <Button variant="primary">Scopri di più</Button> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

function GymPage() {
  return (
    <>
      <PromotionsSection />
      <br />
      <CoursesSection />
    </>
  );
}

export default GymPage;
