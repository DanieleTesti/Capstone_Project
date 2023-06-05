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
        {selectedCourse ? (
          <table>
            <thead>
              <tr>
                <th>Id cliente</th>
                <th>Username</th>
                <th>Mail</th>
              </tr>
            </thead>
            <tbody>
              {getClientiByCorso(selectedCourse)?.map((cliente) =>
                cliente?.roles.some(
                  (ruolo) => ruolo?.roleName === "ROLE_ADMIN"
                ) ? null : (
                  <tr key={cliente.id_cliente}>
                    <td>{cliente.id_cliente}</td>
                    <td>{cliente?.username}</td>
                    <td>{cliente?.email}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Id cliente</th>
                <th>Username</th>
                <th>Mail</th>
              </tr>
            </thead>
            <tbody>
              {clienti?.allUsers?.map((cliente) =>
                cliente?.roles?.some(
                  (ruolo) => ruolo?.roleName === "ROLE_ADMIN"
                ) ? null : (
                  <tr key={cliente.id_cliente}>
                    <td>{cliente.id_cliente}</td>
                    <td>{cliente?.username}</td>
                    <td>{cliente?.email}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </ul>
    </div>
  );
};
export default ClientiList;
