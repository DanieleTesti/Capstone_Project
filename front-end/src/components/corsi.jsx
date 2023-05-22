import React, { useEffect, useState } from "react";
import {
  CORSI_ALL,
  addCorso,
  fetchCorsi,
} from "../Redux/ActionTypes/corsiAction";
import { useDispatch, useSelector } from "react-redux";
import {
  ALL_INSEGNANTI,
  addInsegnante,
  allInsegnanti,
} from "../Redux/ActionTypes/insegnantiAction";
import {
  ADD_CORSO_TO_CLIENTE,
  CLIENTE,
  addCorsoToCliente,
  fetchCliente,
} from "../Redux/ActionTypes/clienteAction";
import Modal from "react-modal";
import "../style/corsi.css";
import {
  FIND_ABB_BY_ID,
  findAbbById,
} from "../Redux/ActionTypes/abbonamentoAction";
import { Toast } from "bootstrap";

const Alert = ({ title, message, onClose }) => (
  <div className="alert-container">
    <h2>{title}</h2>
    <p>{message}</p>
    <button onClick={onClose}>Chiudi</button>
  </div>
);

const CorsiList = () => {
  const corsi = useSelector((state) => state.corsi.AllCorsi);
  const utenteRole = useSelector((state) => state.cliente?.cliente?.roles);
  const idUtente = useSelector((state) => state.cliente?.cliente?.id_cliente);
  const cliente = useSelector((state) => state.cliente?.cliente);
  const usernameCliente = useSelector(
    (state) => state.cliente?.clienteFetch?.username
  );
  const id_cliente = useSelector((state) => state.cliente?.cliente?.id_cliente);
  const fine_abb = useSelector(
    (state) => state.abbonamento?.clienteAbb?.fine_abbonamento
  );

  const [error, setError] = useState(null);
  const [reloadPage, setReloadPage] = useState(false);

  // INSEGNANTE
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");

  // CORSI
  const [descrizione_Corso, setDescrizione_corso] = useState("");
  const [id_insegnante, setIdInsegnante] = useState("");

  // ALERT
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const dispatch = useDispatch();

  const handleShowAlert = (title, message) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertTitle("");
    setAlertMessage("");
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleCognomeChange = (event) => {
    setCognome(event.target.value);
  };

  const handledescrizioneCorsoChange = (event) => {
    setDescrizione_corso(event.target.value);
  };

  const handleidInsegnanteChange = (event) => {
    setIdInsegnante(event.target.value);
  };

  const handleSubmitCorso = async (event) => {
    event.preventDefault();

    // Verifica se l'id dell'insegnante è già assegnato a un corso
    const isInsegnantePresente = corsi.some(
      (corso) => corso.insegnante.id_insegnante.toString() === id_insegnante
    );

    if (isInsegnantePresente) {
      handleShowAlert("ERRORE", "L'insegnante è già assegnato a un corso");
    } else {
      const data = await addCorso(id_insegnante, descrizione_Corso);
      console.log(data);
      setIdInsegnante("");
      setDescrizione_corso("");
      setReloadPage(true);
      handleShowAlert("Corso Creato", "Il corso è stato creato con successo");
    }
  };

  const handleSubmitInsegnante = async (event) => {
    event.preventDefault();

    const data = await addInsegnante({ nome, cognome });
    console.log(data);
  };

  const handleSubmitCorsoToCliente = async (idCorso) => {
    const corsoEsistente = cliente?.corso?.find(
      (corso) => corso.corso === idCorso
    );
    if (corsoEsistente) {
      handleShowAlert(
        "Cliente già iscritto",
        "Il cliente è già iscritto a questo corso."
      );
      return;
    }

    if (fine_abb && new Date(fine_abb) < new Date()) {
      handleShowAlert(
        "Abbonamento scaduto",
        "Il tuo abbonamento è scaduto. Non puoi iscriverti a nuovi corsi."
      );
      return;
    }

    // Aggiungi il corso alla lista dei corsi del cliente
    const data = await addCorsoToCliente(idUtente, idCorso);
    console.log(data);
    dispatch({
      type: ADD_CORSO_TO_CLIENTE,
      payload: data,
    });

    // Aggiorna lo stato del cliente dopo l'aggiunta del corso
    let data2 = await fetchCliente(usernameCliente);
    console.log(data2);
    dispatch({
      type: CLIENTE,
      payload: data2,
    });
  };

  useEffect(() => {
    (async () => {
      const data = await fetchCorsi();
      console.log(data);
      dispatch({
        type: CORSI_ALL,
        payload: data,
      });
    })();
    (async () => {
      const data = await allInsegnanti();
      console.log(data);
      dispatch({
        type: ALL_INSEGNANTI,
        payload: data,
      });
    })();
    (async () => {
      let data = await findAbbById(id_cliente);
      dispatch({
        type: FIND_ABB_BY_ID,
        payload: data,
      });
      // console.log(data);
    })();
  }, []);

  useEffect(() => {
    if (reloadPage) {
      window.location.reload(); // Ricarica la pagina
    }
  }, [reloadPage]);

  return (
    <div className="container">
      <h2>Lista dei Corsi</h2>
      {utenteRole?.map((role) =>
        role?.roleName === "ROLE_ADMIN" ? (
          <div key={role?.id}>
            {corsi?.length === 0 ? (
              <p>NON CI SONO CORSI DISPONIBILI</p>
            ) : (
              <ul>
                {corsi?.map((corso) => (
                  <div key={corso?.corso}>
                    {/* div className="d-flex" */}
                    <li>
                      {corso?.descrizione_Corso}. Insegnante:{" "}
                      {corso?.insegnante?.nome} {corso?.insegnante?.cognome}
                    </li>
                  </div>
                ))}
              </ul>
            )}
            <form onSubmit={handleSubmitInsegnante} className="form-container">
              <label>
                Nome:
                <input
                  type="text"
                  value={nome}
                  onChange={handleNomeChange}
                  className="form-input"
                />
              </label>
              <br />
              <label>
                Cognome:
                <input
                  type="text"
                  value={cognome}
                  onChange={handleCognomeChange}
                  className="form-input"
                />
              </label>
              <br />
              <button onClick={addInsegnante} className="form-button">
                Aggiungi Insegnante
              </button>
            </form>
            <br />
            <div>
              <h2>Creazione Corso</h2>
              <form onSubmit={handleSubmitCorso} className="form-container">
                <label>Descrizione Corso:</label>
                <input
                  type="text"
                  id="descrizioneCorso"
                  value={descrizione_Corso}
                  onChange={handledescrizioneCorsoChange}
                  required
                  className="form-input"
                />

                <br />

                <label>ID Insegnante:</label>
                <input
                  type="number"
                  id="idInsegnante"
                  value={id_insegnante}
                  onChange={handleidInsegnanteChange}
                  required
                  className="form-input"
                />

                <br />

                <button
                  type="submit"
                  // disabled={corsi.map(
                  //   (corso) => corso.insegnante.id_insegnante === id_insegnante
                  // )}
                  className="form-button"
                >
                  Crea Corso
                </button>
              </form>
            </div>
          </div>
        ) : (
          <>
            <ul>
              {corsi?.map((corso) => (
                <div key={corso?.corso}>
                  <li>
                    {corso?.descrizione_Corso}. Insegnante:{" "}
                    {corso?.insegnante?.nome} {corso?.insegnante?.cognome}
                  </li>
                  {fine_abb && new Date(fine_abb) < new Date() ? (
                    <button
                      onClick={() => {
                        if (fine_abb && new Date(fine_abb) < new Date()) {
                          alert(
                            "Non puoi iscriverti. L'abbonamento è scaduto. Passa in palestra per rinnovarlo!"
                          );
                        } else {
                          handleSubmitCorsoToCliente(corso?.corso);
                        }
                      }}
                    >
                      +
                    </button>
                  ) : (
                    // Disabilita il pulsante se l'abbonamento è scaduto
                    <button
                      onClick={() => handleSubmitCorsoToCliente(corso?.corso)}
                    >
                      +
                    </button>
                  )}
                </div>
              ))}
            </ul>
            <h4>Corsi a cui sei iscritto:</h4>
            <ul>
              {cliente?.corso?.map((corso) => (
                <li key={corso?.id}>{corso?.descrizione_Corso}</li>
              ))}
            </ul>
          </>
        )
      )}

      {/* <Modal isOpen={showPopup} onRequestClose={closePopup}>
        <h2>ERRORE</h2>
        <p>
          C'è stato un errore nella creazione del corso. Se l'errore persiste
          contatta l'assistenza
        </p>
      </Modal> */}
      <Modal isOpen={showAlert} onRequestClose={handleCloseAlert}>
        <h2>{alertTitle}</h2>
        <p>{alertMessage}</p>
        <button onClick={handleCloseAlert}>Chiudi</button>
      </Modal>
    </div>
  );
};

export default CorsiList;
