import acquaFusion from "../img/acqua fusion.jpg";
import { Image } from "react-bootstrap";
import acquaCircuit from "../img/acquacircuit.jpg";
import acquaFit from "../img/acquafit.jpg";
import acquaGym from "../img/acquagym.jpg";
import acquatabata from "../img/acquatabat.jpg";
import idrobike from "../img/idrobike.jpg";
import "../style/allCorsi.css";
import yoga from "../img/Stretch-Balance.jpg";
import interval from "../img/interval.jpg";
import bodypump from "../img/bodypump.jpg";
import spinning from "../img/spinning.jpg";
import posturale from "../img/Posturale.jpg";
import pilates from "../img/pilates.jpg";

function SezioneAcqua() {
  return (
    <>
      <h2 className="d-flex justify-content-center my-5">
        Corsi di fitness in acqua
      </h2>
      <div style={{ width: "100%" }}>
        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center sezioneLinesVerde">
            <div className="sectionSport">
              <h4>Sport Acquatici</h4>
              <strong>ACQUA FISION</strong>
              <p>
                Allenamento acquatico ad alto impatto, con finalità funzionali,
                in grado di allenare tutto il corpo in maniera completa e
                funzionale.
              </p>
            </div>
            <div>
              <Image src={acquaFusion} className="immagine" />
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center sezioneLinesNero">
            <div className="sectionSport">
              <h4>Sport Acquatici</h4>
              <strong>ACQUAFIT</strong>
              <p>
                Allenamento acquatico ad alto impatto, con finalità funzionali,
                in grado di allenare tutto il corpo in maniera completa e
                funzionale.
              </p>
            </div>
            <div>
              <Image src={acquaCircuit} className="immagine" />
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center sezioneLinesNero">
            <div>
              <Image src={acquaFit} className="immagine" />
            </div>
            <div className="sectionSport">
              <h4>Sport Acquatici</h4>
              <strong>ACQUAFIT</strong>
              <p>
                Allenamento acquatico ad alto impatto, con finalità funzionali,
                in grado di allenare tutto il corpo in maniera completa e
                funzionale.
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center sezioneLinesVerde">
            <div>
              <Image src={acquaGym} className="immagine" />
            </div>
            <div className="sectionSport">
              <h4>Sport Acquatici</h4>
              <strong>ACQUAGYM</strong>
              <p>
                I benefici di questa disciplina, sono dovuti dal massaggio che
                l’acqua esercita sul nostro corpo, può essere praticata da
                chiunque.
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center sezioneLinesVerde">
            <div className="sectionSport">
              <h4>Sport Acquatici</h4>
              <strong>IDRO BIKE</strong>
              <p>
                Allenamento in acqua media lezione fatta con musica su cyclette
                fissate sul fondo della piscina e immerse in acqua fino al
                manubrio.
              </p>
            </div>
            <div>
              <Image src={idrobike} className="immagine" />
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center sezioneLinesNero">
            <div className="sectionSport">
              <h4>Sport Acquatici</h4>
              <strong>ACQUATABATA</strong>
              <p>
                Disciplina ad intenso allenamento acquatico attraverso
                l’alternanza di alta e bassa intensità a ritmo di musica.
              </p>
            </div>
            <div>
              <Image src={acquatabata} className="immagine" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SezioneFitness() {
  return (
    <>
      <h2 className="d-flex justify-content-center my-5">Corsi di fitness </h2>
      <div style={{ width: "100%" }}>
        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center sezioneLinesVerde">
            <div className="sectionSport">
              <h4>Fitness</h4>
              <strong>FITNESS YOGA</strong>
              <p>
                Allungamento muscolare con esercizi di equilibrio gravitari.
              </p>
            </div>
            <div>
              <Image src={yoga} className="immagine" />
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center sezioneLinesNero">
            <div className="sectionSport">
              <h4>Fitness</h4>
              <strong>INTERVAL TRAINING</strong>
              <p>
                Mirato ad aumentare la velocità di recupero e favorisce il
                dimagrimento.
              </p>
            </div>
            <div>
              <Image src={interval} className="immagine" />
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center sezioneLinesNero">
            <div>
              <Image src={bodypump} className="immagine" />
            </div>
            <div className="sectionSport">
              <h4>Fitness</h4>
              <strong>JUST PUMP</strong>
              <p>
                Si tratta di una formula di allenamento che prevede che i
                muscoli siano messi sotto sforzo.
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center sezioneLinesVerde">
            <div>
              <Image src={spinning} className="immagine" />
            </div>
            <div className="sectionSport">
              <h4>Fitness</h4>
              <strong>MAC CYCLING</strong>
              <p>
                Lezione che simula un viaggio virtuale in bicicletta lungo un
                percorso che alterna andature diverse
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex">
          <div className="d-flex justify-content-center align-items-center sezioneLinesVerde">
            <div className="sectionSport">
              <h4>Fitness</h4>
              <strong>POSTURALE</strong>
              <p>
                Attività che mira al riequilibrio e al rinforzo dei muscoli
                posturali, per evitare tensioni muscolari scorrette e dolorose{" "}
              </p>
            </div>
            <div>
              <Image src={posturale} className="immagine" />
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center sezioneLinesNero">
            <div className="sectionSport">
              <h4>Fitness</h4>
              <strong>PILATES</strong>
              <p>
                Il Pilates è un tipo di allenamento che punta a rinforzare il
                corpo, a modellarlo correggendo la postura .
              </p>
            </div>
            <div>
              <Image src={pilates} className="immagine" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CorsiPage() {
  return (
    <>
      <SezioneAcqua />
      <br />
      <SezioneFitness />
    </>
  );
}

export default CorsiPage;
