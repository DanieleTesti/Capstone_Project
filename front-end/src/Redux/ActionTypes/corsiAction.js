export const CORSI_ALL = "CORSI_ALL";
export const FIND_CORSO_BY_ID = "FIND_CORSO_BY_ID";
export const ADD_CORSO = "ADD_CORSO";

export const fetchCorsi = async () => {
  try {
    let res = await fetch(`http://localhost:8081/api/corso/all`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJnZXN0b3JlLnBzQG1haWwuY29tIiwiaWF0IjoxNjg0ODI4NDcwLCJleHAiOjE2ODU0MzMyNzB9.jDWfGZSgoJpFvroHsnXbjzerC3wTW9YDwxKY3vBe4dABqFxFXRnW0jKcXKabGzBQ",
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
          "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJnZXN0b3JlLnBzQG1haWwuY29tIiwiaWF0IjoxNjg0ODI4NDcwLCJleHAiOjE2ODU0MzMyNzB9.jDWfGZSgoJpFvroHsnXbjzerC3wTW9YDwxKY3vBe4dABqFxFXRnW0jKcXKabGzBQ",
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

export const addCorso = async (id_insegnante, descrizione_Corso) => {
  try {
    const response = await fetch(
      `http://localhost:8081/api/corso/add/${id_insegnante}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJnZXN0b3JlLnBzQG1haWwuY29tIiwiaWF0IjoxNjg0ODI4NDcwLCJleHAiOjE2ODU0MzMyNzB9.jDWfGZSgoJpFvroHsnXbjzerC3wTW9YDwxKY3vBe4dABqFxFXRnW0jKcXKabGzBQ",
        },
        body: JSON.stringify({ descrizione_Corso: descrizione_Corso }),
      }
    );

    if (response.ok) {
      const corsoCreato = await response.json();
      console.log("Descrizione corso creato:", corsoCreato);
    } else {
      console.log("Errore durante la creazione del corso:", response.status);
    }
  } catch (error) {
    console.log("Errore durante la richiesta:", error);
  }
};
