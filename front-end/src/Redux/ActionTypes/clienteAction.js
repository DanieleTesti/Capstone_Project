export const FETCH_CLIENTE = "FETCH_CLIENTE";
export const ALL_USER = "ALL_USER";
export const CLIENTE = "CLIENTE";
export const ADD_CORSO_TO_CLIENTE = "ADD_CORSO_TO_CLIENTE";

export const fetchCliente = async (endpoint) => {
  try {
    let res = await fetch(
      `http://localhost:8081/api/cliente/username/${endpoint}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJnZXN0b3JlLnBzQG1haWwuY29tIiwiaWF0IjoxNjg0ODI4NDcwLCJleHAiOjE2ODU0MzMyNzB9.jDWfGZSgoJpFvroHsnXbjzerC3wTW9YDwxKY3vBe4dABqFxFXRnW0jKcXKabGzBQ",
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      return data;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const allClienti = async () => {
  try {
    let res = await fetch(`http://localhost:8081/api/cliente/all`, {
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

export const addCorsoToCliente = async (idCliente, idCorso) => {
  try {
    let res = await fetch(
      `http://localhost:8081/api/cliente/addCorso/${idCliente}/${idCorso}`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJnZXN0b3JlLnBzQG1haWwuY29tIiwiaWF0IjoxNjg0MzE1MDYyLCJleHAiOjE2ODQ5MTk4NjJ9.4z2n1bnt91bNtTHEcA5Jbjf4PvB7c0UMdtiF63697LZrVQEH8Qiyur0KCD8pIkZl",
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      return data;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};
