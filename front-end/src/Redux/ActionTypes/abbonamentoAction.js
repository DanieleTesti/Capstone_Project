export const ALL_ABBONAMENTI = "ALL_ABBONAMENTI";
export const FIND_ABB_BY_ID = "FIND_ABB_BY_ID";

export const allAbbonamenti = async () => {
  try {
    let res = await fetch(`http://localhost:8081/api/abbonamento/all`, {
      method: "GET",
      headers: {
        Authorization:
          "BearereyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJnZXN0b3JlLnBzQG1haWwuY29tIiwiaWF0IjoxNjg0ODI4NDcwLCJleHAiOjE2ODU0MzMyNzB9.jDWfGZSgoJpFvroHsnXbjzerC3wTW9YDwxKY3vBe4dABqFxFXRnW0jKcXKabGzBQ",
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

export const findAbbById = async (endpoint) => {
  try {
    let res = await fetch(
      `http://localhost:8081/api/abbonamento/cliente/${endpoint}`,
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
