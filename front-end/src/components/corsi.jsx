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

const CorsiList = () => {
  const corsi = useSelector((state) => state.corsi.AllCorsi);
  const utenteRole = useSelector((state) => state.cliente?.cliente?.roles);
  const idUtente = useSelector((state) => state.cliente?.cliente?.id_cliente);
  const cliente = useSelector((state) => state.cliente?.cliente);
  const usernameCliente = useSelector(
    (state) => state.cliente?.clienteFetch?.username
  );

  const [error, setError] = useState(null);
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

    // Verifica se l'id dell'insegnante è già assegnato a un corso
    const isInsegnantePresente = corsi.some(
      (corso) => corso?.insegnante?.id_insegnante === id_insegnante
    );

    //NON FUNZIONA IL CONTROLLO SE UN INSEGNANTE E GIA ASSEGNANTO A UN CORSO

    if (isInsegnantePresente) {
      console.log("L'insegnante è già assegnato a un corso");
      return;
    } else {
      console.log(isInsegnantePresente);
      // corsi.map((corso) => console.log(corso.insegnante));
    }

    // const data = await addCorso(id_insegnante, descrizione_Corso);
    // console.log(data);
    // setIdInsegnante("");
    // setDescrizione_corso("");
    // setReloadPage(true);
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
      console.log("Sei gia iscritto a questo corso");
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
  }, []);

  useEffect(() => {
    if (reloadPage) {
      window.location.reload(); // Ricarica la pagina
    }
  }, [reloadPage]);

  return (
    <div>
      <h2>Lista dei Corsi</h2>
      {utenteRole.map((role) =>
        role.roleName === "ROLE_ADMIN" ? (
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
          </div>
        ) : (
          <>
            <ul>
              {corsi?.map((corso) => (
                <div key={corso?.corso}>
                  {/* div className="d-flex" */}
                  <li>
                    {corso?.descrizione_Corso}. Insegnante:{" "}
                    {corso?.insegnante?.nome} {corso?.insegnante?.cognome}
                  </li>
                  <button
                    onClick={() => handleSubmitCorsoToCliente(corso?.corso)}
                  >
                    +
                  </button>
                </div>
              ))}
            </ul>
            {/* <h2>Buongiorno {utenteRole?.map((role) => role.roleName)}</h2> */}
            {/* <h4 key={role?.id}>
              Hai la possibilità di iscriverti a tutti i corsi che si trovano
              nella sezione sopra solamente premendo il tasto +
            </h4> */}
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
