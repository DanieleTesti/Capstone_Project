export const CORSI_ALL = "CORSI_ALL";
export const FIND_CORSO_BY_ID = "FIND_CORSO_BY_ID";
export const ADD_CORSO = "ADD_CORSO";

export const fetchCorsi = async () => {
  try {
    let res = await fetch(`http://localhost:8081/api/corso/all`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJnZXN0b3JlLnBzQG1haWwuY29tIiwiaWF0IjoxNjg0MTc5NzM3LCJleHAiOjE2ODQ3ODQ1Mzd9.0JzxBy_6AlZb21WNz_uPdr3lVPxajM5utXSVJVNQDujIDfIpHy0u_lervNnFr2Cl",
      },
    });
    if (res.ok) {
      let data = await res.json();
      return data;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const findCorsoById = async (idCorso) => {
  try {
    let res = await fetch(`http://localhost:8081/api/corso/${idCorso}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJnZXN0b3JlLnBzQG1haWwuY29tIiwiaWF0IjoxNjg0MTc5NzM3LCJleHAiOjE2ODQ3ODQ1Mzd9.0JzxBy_6AlZb21WNz_uPdr3lVPxajM5utXSVJVNQDujIDfIpHy0u_lervNnFr2Cl",
      },
    });
    if (res.ok) {
      let data = await res.json();
      return data;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const addCorso = async (id_insegnante, descrizione_corso) => {
  try {
    const response = await fetch(
      `http://localhost:8081/api/corso/add/${id_insegnante}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJnZXN0b3JlLnBzQG1haWwuY29tIiwiaWF0IjoxNjg0MTc5NzM3LCJleHAiOjE2ODQ3ODQ1Mzd9.0JzxBy_6AlZb21WNz_uPdr3lVPxajM5utXSVJVNQDujIDfIpHy0u_lervNnFr2Cl",
        },
        body: JSON.stringify({ descrizione_corso: descrizione_corso }),
      }
    );

    if (response.ok) {
      const corsoCreato = await response.json();
      console.log("Corso creato:", corsoCreato);
    } else {
      console.log("Errore durante la creazione del corso:", response.status);
    }
  } catch (error) {
    console.log("Errore durante la richiesta:", error);
  }
};
