import React, { useEffect, useState } from "react";
import axios from "axios";

const CorsiList = () => {
  const [corsi, setCorsi] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCorsi();
  }, []);

  const fetchCorsi = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/corso/all");
      setCorsi(response.data);
      setError(null);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Non sei autorizzato a accedere a questa risorsa.");
      } else {
        setError("Si è verificato un errore durante il recupero dei corsi.");
      }
    }
  };

  return (
    <div>
      <h2>Lista dei Corsi</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {corsi.map((corso) => (
            <li key={corso.corso}>
              {corso.descrizione_Corso}. Insegnante: {corso.insegnante.nome}{" "}
              {corso.insegnante.cognome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CorsiList;
