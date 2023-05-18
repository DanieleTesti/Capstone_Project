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
  addCorsoToCliente,
} from "../Redux/ActionTypes/clienteAction";

const CorsiList = () => {
  const corsi = useSelector((state) => state.corsi.AllCorsi);
  const utenteRole = useSelector((state) => state.cliente?.cliente?.roles);
  const idUtente = useSelector((state) => state.cliente?.cliente?.id_cliente);
  const iscrizione = useSelector((state) => state.cliente);

  const [error, setError] = useState(null);

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

    try {
      const data = await addCorso(id_insegnante, descrizione_Corso);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError("Si è verificato un errore durante l'aggiunta del corso");
    }
    setIdInsegnante("");
    setDescrizione_corso("");
  };

  const handleSubmitInsegnante = async (event) => {
    event.preventDefault();

    try {
      const data = await addInsegnante({ nome, cognome });
      console.log(data);
      // Esegui altre azioni o aggiorna lo stato come necessario dopo l'aggiunta dell'insegnante
    } catch (error) {
      console.log(error);
      setError("Si è verificato un errore durante l'aggiunta dell'insegnante");
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchCorsi();
        console.log(data);
        dispatch({
          type: CORSI_ALL,
          payload: data,
        });
      } catch (error) {
        console.log(error);
        setError("Si è verificato un errore durante il recupero dei corsi");
      }
    })();
    // console.log(utente.map((role) => role.roleName));
  }, []);

  const handleSubmitCorsoToCliente = async (idCorso) => {
    const data = await addCorsoToCliente(idUtente, idCorso);
    console.log(data);
    dispatch({
      type: ADD_CORSO_TO_CLIENTE,
      payload: data,
    });
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await addCorsoToCliente(idCliente, idCorso);
  //       console.log(data);
  //       dispatch({
  //         type: ADD_CORSO_TO_CLIENTE,
  //         payload: data,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       setError("Si è verificato un errore durante il recupero dei corsi");
  //     }
  //   })();
  //   // console.log(utente.map((role) => role.roleName));
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await allInsegnanti();
        console.log(data);
        dispatch({
          type: ALL_INSEGNANTI,
          payload: data,
        });
      } catch (error) {
        console.log(error);
        setError(
          "Si è verificato un errore durante il recupero degli insegnanti"
        );
      }
    })();
  }, []);

  return (
    <div>
      <h2>Lista dei Corsi</h2>
      {utenteRole.map((role) =>
        role.roleName === "ROLE_ADMIN" ? (
          <>
            {" "}
            <ul>
              {corsi?.map((corso) => (
                <div>
                  {/* div className="d-flex" */}
                  <li key={corso?.corso}>
                    {corso?.descrizione_Corso}. Insegnante:{" "}
                    {corso?.insegnante?.nome} {corso?.insegnante?.cognome}
                  </li>
                </div>
              ))}
            </ul>
            <form onSubmit={handleSubmitInsegnante}>
              <label>
                Nome:
                <input type="text" value={nome} onChange={handleNomeChange} />
              </label>
              <br />
              <label>
                Cognome:
                <input
                  type="text"
                  value={cognome}
                  onChange={handleCognomeChange}
                />
              </label>
              <br />
              <button onClick={addInsegnante}>Aggiungi Insegnante</button>
            </form>
            <br />
            <div>
              <h2>Creazione Corso</h2>
              <form onSubmit={handleSubmitCorso}>
                <label>Descrizione Corso:</label>
                <input
                  type="text"
                  id="descrizioneCorso"
                  value={descrizione_Corso}
                  onChange={handledescrizioneCorsoChange}
                  required
                />

                <br />

                <label>ID Insegnante:</label>
                <input
                  type="number"
                  id="idInsegnante"
                  value={id_insegnante}
                  onChange={handleidInsegnanteChange}
                  required
                />

                <br />

                <button type="submit">Crea Corso</button>
              </form>
            </div>
          </>
        ) : (
          <>
            <ul>
              {corsi?.map((corso) => (
                <div>
                  {/* div className="d-flex" */}
                  <li key={corso?.corso}>
                    {corso?.descrizione_Corso}. Insegnante:{" "}
                    {corso?.insegnante?.nome} {corso?.insegnante?.cognome}
                  </li>
                  {/* <button
                    onClick={() => handleSubmitCorsoToCliente(corso?.corso)}
                  >
                    +
                  </button> */}
                </div>
              ))}
            </ul>
            <h2>Buongiorno {utenteRole?.map((role) => role.roleName)}</h2>
            <h4>
              Hai la possibilità di iscriverti a tutti i corsi che si trovano
              nella sezione sopra solamente premendo il tasto +
            </h4>
          </>
        )
      )}
    </div>
  );
};

export default CorsiList;
