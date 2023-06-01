import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import piscina from "../img/piscina.jpeg";
import calcio from "../img/calcio.jpg";
import sala from "../img/sala-fitness.jpg";
import "../style/il_nostro_centro.css";
import { Link } from "react-router-dom";

function GymInfo() {
  return (
    <div>
      <Row className=" my-5 mx-3 ">
        <Col md={8}>
          <h1 className=" mb-4">Il Centro Sportivo</h1>
          <p>
            Benvenuti al nostro centro sportivo situato in Via Roma 1, nel cuore
            di Roma. La nostra struttura si estende su una superficie di 3000 mq
            e offre una vasta gamma di servizi e attività per soddisfare le
            esigenze di appassionati dello sport e del benessere. Potrete
            allenarvi nelle nostre moderne sale fitness, nuotare nella nostra
            piscina coperta, praticare tennis e calcio sui nostri campi e
            partecipare a corsi di gruppo come aerobica, yoga e pilates. I
            nostri istruttori qualificati vi supporteranno durante i vostri
            allenamenti e saremo lieti di aiutarvi a raggiungere i vostri
            obiettivi di fitness. Siamo impegnati a offrire un ambiente
            accogliente e motivante, dove potrete godervi al meglio l'esperienza
            sportiva. Vi aspettiamo nel nostro centro sportivo per iniziare
            insieme il vostro percorso verso uno stile di vita attivo e
            salutare.
          </p>
        </Col>
      </Row>
      <div className="all">
        <Row className="justify-content-center mx-0">
          <Col md={6} className="descrizione">
            <h1>SPORT ACQUATICI</h1>
            <p>
              Due Piscine interne ed una esterna. La principale, 6 corsie x 25
              mt., dedicata al nuoto libero e all'acquagym, ospita anche
              attività di scuola nuoto e di pallanuoto agonistica. La seconda,
              più piccola, è dedicata ad attività di fitness in acqua più
              specifiche e alla scuola nuoto per i più piccini. La piscina
              esterna è attiva nel periodo estivo per il relax e l'attività di
              adulti e bambini.
            </p>
          </Col>
          <Col md={6} className=" immagine px-0">
            <Link to="/corsiPage">
              <Image
                src={piscina}
                style={{ width: "100%", height: "100%" }}
              ></Image>
            </Link>
          </Col>
        </Row>

        <Row className="justify-content-center mx-0">
          <Col md={6} className=" immagine px-0">
            <Link to="/corsiPage">
              <Image
                src={calcio}
                style={{ width: "100%", height: "100%" }}
              ></Image>
            </Link>
          </Col>
          <Col md={6} className="descrizione">
            <h1>CALCIO</h1>
            <p>
              Quattro campi di calcetto e due di calciotto utilizzati dalla
              scuola calcio. Possono essere affittati dai soci o anche da
              esterni per una partita tra amici o per partecipare ad un torneo
              organizzato.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mx-0">
          <Col md={6} className="descrizione">
            <h1>FITNESS</h1>
            <p>
              Una sala pesi completa di tutte le attrezzature per il tuo
              allenamento e quattro sale dove svolgere tutte le lezioni di
              fitness insieme ai migliori insegnanti.
            </p>
          </Col>
          <Col md={6} className="immagine px-0">
            <Link to="/corsiPage">
              <Image
                src={sala}
                style={{ width: "100%", height: "100%" }}
              ></Image>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default GymInfo;
