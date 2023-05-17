import React from "react";
import { useSelector } from "react-redux";

const IscrizioneCorso = () => {
  const idCliente = useSelector((state) => state.cliente.idCliente);
  const idCorso = useSelector((state) => state.corsi.AllCorsi.descizione_Corso);

  const handleIscriviti = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/addCorso/${idCliente}/${idCorso}`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJnZXN0b3JlLnBzQG1haWwuY29tIiwiaWF0IjoxNjg0MTc5NzM3LCJleHAiOjE2ODQ3ODQ1Mzd9.0JzxBy_6AlZb21WNz_uPdr3lVPxajM5utXSVJVNQDujIDfIpHy0u_lervNnFr2Cl",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Puoi eseguire altre azioni dopo l'iscrizione al corso
      } else {
        console.log("Errore durante la richiesta");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  return (
    <div>
      <button onClick={handleIscriviti}>Iscriviti al corso</button>
    </div>
  );
};

export default IscrizioneCorso;
