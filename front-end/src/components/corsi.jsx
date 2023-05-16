import React, { useEffect, useState } from "react";
import { CORSI_ALL, fetchCorsi } from "../Redux/ActionTypes/corsiAction";
import { useDispatch, useSelector } from "react-redux";

const CorsiList = () => {
  const corsi = useSelector((state) => state.corsi.AllCorsi);

  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let data = await fetchCorsi();
      console.log(data);
      dispatch({
        type: CORSI_ALL,
        payload: data,
      });
    })();
  }, []);

  return (
    <div>
      <h2>Lista dei Corsi</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {corsi?.map((corsi) => (
            <li key={corsi.corso}>
              {corsi.descrizione_Corso}. Insegnante: {corsi.insegnante.nome}{" "}
              {corsi.insegnante.cognome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CorsiList;
