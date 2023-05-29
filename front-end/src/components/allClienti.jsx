import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ALL_USER, allClienti } from "../Redux/ActionTypes/clienteAction";
import { CORSI_ALL, fetchCorsi } from "../Redux/ActionTypes/corsiAction";
import "../style/allClienti.css";

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
      const data = await allClienti(gestoreToken);
      dispatch({
        type: ALL_USER,
        payload: data,
      });
    })();
    (async () => {
      const data = await fetchCorsi(gestoreToken);
      dispatch({
        type: CORSI_ALL,
        payload: data,
      });
    })();
  }, []);

  return (
    <div className="MyContainer">
      <h1>Lista di clienti iscritti in palestra</h1>
      <br />
      <br />
      <h4 htmlFor="course-select">
        Seleziona corso per vedere chi è iscritto:{" "}
      </h4>
      <br />
      <select
        id="course-select"
        value={selectedCourse}
        onChange={handleCorsoChange}
      >
        <option value="">Tutti i corsi</option>
        <br />
        {corsi?.map((corso) => (
          <option value={corso?.id} key={corso?.corso}>
            {corso?.descrizione_Corso}
          </option>
        ))}
      </select>
      <ul key="clienti-list">
        {selectedCourse
          ? getClientiByCorso(selectedCourse)?.map((cliente) =>
              cliente?.roles.some(
                (ruolo) => ruolo?.roleName === "ROLE_ADMIN"
              ) ? null : (
                <>
                  <br />
                  <li key={cliente.id_cliente}>
                    Id cliente: {cliente.id_cliente} , Username:{" "}
                    {cliente?.username} , Mail: {cliente?.email} , Ruolo:{" "}
                    {cliente?.roles.map((ruolo) => ruolo?.roleName)}
                  </li>
                </>
              )
            )
          : clienti?.allUsers?.map((cliente) =>
              cliente?.roles?.some(
                (ruolo) => ruolo?.roleName === "ROLE_ADMIN"
              ) ? null : (
                <>
                  <br />
                  <li key={cliente.id_cliente}>
                    Id cliente: {cliente.id_cliente} , Username:{" "}
                    {cliente?.username} , Mail: {cliente?.email} , Ruolo:{" "}
                    {cliente?.roles.map((ruolo) => ruolo?.roleName)}
                  </li>
                </>
              )
            )}
      </ul>
    </div>
  );
};

export default ClientiList;
