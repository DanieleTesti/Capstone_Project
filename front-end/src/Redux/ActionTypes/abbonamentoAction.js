export const ALL_ABBONAMENTI = "ALL_ABBONAMENTI";
export const FIND_ABB_BY_ID = "FIND_ABB_BY_ID";

export const allAbbonamenti = async (gestoreToken) => {
  try {
    let res = await fetch(`http://localhost:8081/api/abbonamento/all`, {
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

export const findAbbById = async (endpoint, gestoreToken) => {
  try {
    let res = await fetch(
      `http://localhost:8081/api/abbonamento/cliente/${endpoint}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${gestoreToken}`,
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
