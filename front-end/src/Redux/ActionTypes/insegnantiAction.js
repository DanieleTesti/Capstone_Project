export const ADD_INSEGNANTE = "ADD_INSEGNANTE";
export const FIND_INSEGNANTE = "FIND_INSEGNANTE";
export const ALL_INSEGNANTI = "ALL_INSEGNANTI";

export const addInsegnante = async (data, gestoreToken) => {
  try {
    const res = await fetch(`http://localhost:8081/api/insegnante/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${gestoreToken}`,
      },
      body: JSON.stringify(data),
    });
    console.log(data);

    if (res.ok) {
      let data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const findInsegnanteById = async (endpoint, gestoreToken) => {
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
    console.log(gestoreToken);
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const allInsegnanti = async (gestoreToken) => {
  console.log(gestoreToken);
  try {
    let res = await fetch(`http://localhost:8081/api/insegnante/all`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${gestoreToken}`,
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
