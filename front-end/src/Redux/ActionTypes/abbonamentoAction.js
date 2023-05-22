export const ALL_ABBONAMENTI = "ALL_ABBONAMENTI";
export const FIND_ABB_BY_ID = "FIND_ABB_BY_ID";

export const allAbbonamenti = async () => {
  try {
    let res = await fetch(`http://localhost:8081/api/abbonamento/all`, {
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

export const findAbbById = async (endpoint) => {
  try {
    let res = await fetch(
      `http://localhost:8081/api/abbonamento/cliente/${endpoint}`,
      {
        method: "GET",
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
