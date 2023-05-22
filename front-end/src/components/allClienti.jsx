import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ALL_USER, allClienti } from "../Redux/ActionTypes/clienteAction";

const ClientiList = () => {
  const clienti = useSelector((state) => state.cliente);
  const corsi = useSelector((state) => state.corsi.AllCorsi);
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
      const data = await allClienti();
      console.log(data);
      dispatch({
        type: ALL_USER,
        payload: data,
      });
    })();
  }, []);

  return (
    <div>
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
                <li key={cliente?.id_cliente}>
                  <strong>{cliente?.id_cliente - 1}</strong> = Username:{" "}
                  {cliente?.username}, Mail: {cliente?.email}, Ruolo:{" "}
                  {cliente?.roles.map((ruolo) => ruolo?.roleName)}
                </li>
              )
            )
          : clienti?.allUsers.map((cliente) =>
              cliente?.roles.some(
                (ruolo) => ruolo?.roleName === "ROLE_ADMIN"
              ) ? null : (
                <li key={cliente.id_cliente}>
                  <strong>{cliente?.id_cliente - 1}</strong> = Username:{" "}
                  {cliente?.username}, Mail: {cliente?.email}, Ruolo:{" "}
                  {cliente?.roles.map((ruolo) => ruolo?.roleName)}
                </li>
              )
            )}
      </ul>
    </div>
  );
};

export default ClientiList;
