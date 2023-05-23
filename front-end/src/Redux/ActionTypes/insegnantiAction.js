export const ADD_INSEGNANTE = "ADD_INSEGNANTE";
export const FIND_INSEGNANTE = "FIND_INSEGNANTE";
export const ALL_INSEGNANTI = "ALL_INSEGNANTI";

export const addInsegnante = async (data) => {
  try {
    const res = await fetch(`http://localhost:8081/api/insegnante/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJnZXN0b3JlLnBzQG1haWwuY29tIiwiaWF0IjoxNjg0ODI4NDcwLCJleHAiOjE2ODU0MzMyNzB9.jDWfGZSgoJpFvroHsnXbjzerC3wTW9YDwxKY3vBe4dABqFxFXRnW0jKcXKabGzBQ",
      },
      body: JSON.stringify(data),
    });
    console.log(data);

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

export const findInsegnanteById = async (endpoint) => {
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

export const allInsegnanti = async () => {
  try {
    let res = await fetch(`http://localhost:8081/api/insegnante/all`, {
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
