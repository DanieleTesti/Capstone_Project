import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ALL_USER, allClienti } from "../Redux/ActionTypes/clienteAction";
import { CORSI_ALL, fetchCorsi } from "../Redux/ActionTypes/corsiAction";

const ClientiList = () => {
  const clienti = useSelector((state) => state?.cliente);
  const corsi = useSelector((state) => state?.corsi?.AllCorsi);
  const gestoreToken = useSelector(
    (state) => state.cliente?.clienteFetch?.accessToken
  );

  const [selectedCourse, setSelectedCourse] = useState("");
  const dispatch = useDispatch();

  const handleCorsoChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const getClientiByCorso = (corsoId) => {
    if (!corsoId) {
      return clienti?.allUsers;
    } else {
      return clienti?.allUsers?.filter((cliente) =>
        cliente.corso.some((corso) => corso.descrizione_Corso === corsoId)
      );
    }
  };

  useEffect(() => {
    (async () => {
      console.log(gestoreToken);
      const data = await allClienti(gestoreToken);
      console.log(data);
      dispatch({
        type: ALL_USER,
        payload: data,
      });
    })();
    (async () => {
      const data = await fetchCorsi(gestoreToken);
      console.log(data);
      dispatch({
        type: CORSI_ALL,
        payload: data,
      });
    })();
  }, []);

  return (
    <div className="MyContainer">
      <h2>Lista di clienti iscritti in palestra</h2>
      <label htmlFor="course-select">Seleziona corso: </label>
      <select
        id="course-select"
        value={selectedCourse}
        onChange={handleCorsoChange}
      >
        <option value="">Tutti i corsi</option>
        {corsi?.map((corso) => (
          <option value={corso?.id} key={corso?.corso}>
            {corso?.descrizione_Corso}
          </option>
        ))}
      </select>
      <ul>
        {selectedCourse
          ? getClientiByCorso(selectedCourse)?.map((cliente) =>
              cliente?.roles.some(
                (ruolo) => ruolo?.roleName === "ROLE_ADMIN"
              ) ? null : (
                <ul>
                  <li key={cliente.id_cliente}>
                    Username: {cliente?.username}, Mail: {cliente?.email},
                    Ruolo: {cliente?.roles.map((ruolo) => ruolo?.roleName)}
                  </li>
                </ul>
              )
            )
          : clienti?.allUsers?.map((cliente) =>
              cliente?.roles?.some(
                (ruolo) => ruolo?.roleName === "ROLE_ADMIN"
              ) ? null : (
                <ul>
                  <li key={cliente.id_cliente}>
                    Username: {cliente?.username}, Mail: {cliente?.email},
                    Ruolo: {cliente?.roles.map((ruolo) => ruolo?.roleName)}
                  </li>
                </ul>
              )
            )}
      </ul>
    </div>
  );
};

export default ClientiList;
