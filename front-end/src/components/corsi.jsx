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
import "../style/corsi.css";
import {
  FIND_ABB_BY_ID,
  findAbbById,
} from "../Redux/ActionTypes/abbonamentoAction";

const CorsiList = () => {
  const corsi = useSelector((state) => state.corsi.AllCorsi);
  const utenteRole = useSelector((state) => state.cliente?.cliente?.roles);
  const idUtente = useSelector((state) => state.cliente?.cliente?.id_cliente);
  const cliente = useSelector((state) => state.cliente?.cliente);
  const usernameCliente = useSelector(
    (state) => state.cliente?.clienteFetch?.username
  );
  const gestoreToken = useSelector(
    (state) => state.cliente?.clienteFetch?.accessToken
  );
  const id_cliente = useSelector((state) => state.cliente?.cliente?.id_cliente);
  const fine_abb = useSelector(
    (state) => state.abbonamento?.clienteAbb?.fine_abbonamento
  );

  const [reloadPage, setReloadPage] = useState(false);

  // INSEGNANTE
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");

  // CORSI
  const [descrizione_Corso, setDescrizione_corso] = useState("");
  const [id_insegnante, setIdInsegnante] = useState("");

  const dispatch = useDispatch();

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

    const isInsegnantePresente = corsi.some(
      (corso) => corso.insegnante.id_insegnante.toString() === id_insegnante
    );

    if (isInsegnantePresente) {
      alert(
        "!! ERRORE !! L'insegnante è già assegnato a un corso. Crea un altro insegnante o assegnane uno nuovo"
      );
    } else {
      const data = await addCorso(
        id_insegnante,
        descrizione_Corso,
        gestoreToken
      );
      console.log(data);
      setIdInsegnante("");
      setDescrizione_corso("");
      setReloadPage(true);
      alert("Il corso è stato creato con successo");
    }
  };

  const handleSubmitInsegnante = async (event) => {
    event.preventDefault();
    const data = await addInsegnante({ nome, cognome }, gestoreToken);
    console.log(data);
    alert("Insegnante creato con nome : " + nome + " e cognome : " + cognome);
  };

  const handleSubmitCorsoToCliente = async (idCorso) => {
    const corsoEsistente = cliente?.corso?.find(
      (corso) => corso.corso === idCorso
    );
    if (corsoEsistente) {
      alert("Il cliente è già iscritto a questo corso.");
      return;
    } else {
      alert(
        "Il cliente " +
          cliente?.username +
          " è stato iscritto al corso con id " +
          idCorso
      );
    }

    if (fine_abb && new Date(fine_abb) < new Date()) {
      alert("Il tuo abbonamento è scaduto. Non puoi iscriverti a nuovi corsi.");
      return;
    }

    const data = await addCorsoToCliente(idUtente, idCorso, gestoreToken);
    console.log(data);
    dispatch({
      type: ADD_CORSO_TO_CLIENTE,
      payload: data,
    });

    let data2 = await fetchCliente(usernameCliente, gestoreToken);
    console.log(data2);
    dispatch({
      type: CLIENTE,
      payload: data2,
    });
  };

  useEffect(() => {
    (async () => {
      console.log(gestoreToken);
      const data = await fetchCorsi(gestoreToken);
      console.log(data);
      dispatch({
        type: CORSI_ALL,
        payload: data,
      });
    })();
    (async () => {
      const data = await allInsegnanti(gestoreToken);
      console.log(data);
      dispatch({
        type: ALL_INSEGNANTI,
        payload: data,
      });
    })();
    (async () => {
      let data = await findAbbById(id_cliente, gestoreToken);
      dispatch({
        type: FIND_ABB_BY_ID,
        payload: data,
      });
    })();
  }, []);

  useEffect(() => {
    if (reloadPage) {
      window.location.reload();
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
                  <div key={corso?.corso} className="d-flex">
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
                <button type="submit" className="form-button">
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
    </div>
  );
};

export default CorsiList;
