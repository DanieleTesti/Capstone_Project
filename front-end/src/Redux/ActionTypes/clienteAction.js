export const FETCH_CLIENTE = "FETCH_CLIENTE";
export const ALL_USER = "ALL_USER";
export const CLIENTE = "CLIENTE";
export const ADD_CORSO_TO_CLIENTE = "ADD_CORSO_TO_CLIENTE";

export const fetchCliente = async (endpoint, gestoreToken) => {
  try {
    let res = await fetch(
      `http://localhost:8081/api/cliente/username/${endpoint}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${gestoreToken}`,
        },
      }
    );
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

export const allClienti = async (gestoreToken) => {
  try {
    let res = await fetch(`http://localhost:8081/api/cliente/all`, {
      method: "GET",
      headers: {
        //statico funziona e dinamico no, lo stesso token
        Authorization: `Bearer ${gestoreToken}`,
      },
    });
    if (res.ok) {
      let data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const addCorsoToCliente = async (idCliente, idCorso, gestoreToken) => {
  try {
    let res = await fetch(
      `http://localhost:8081/api/cliente/addCorso/${idCliente}/${idCorso}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${gestoreToken}`,
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
