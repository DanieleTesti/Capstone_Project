import IndividualIntervalsExample from "./first_section";
import GymPage from "./midSection_Home";
import {
  ALL_USER,
  CLIENTE,
  allClienti,
  fetchCliente,
} from "../Redux/ActionTypes/clienteAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CORSI_ALL, fetchCorsi } from "../Redux/ActionTypes/corsiAction";
import {
  ALL_INSEGNANTI,
  allInsegnanti,
} from "../Redux/ActionTypes/insegnantiAction";

function HomePage() {
  const dispatch = useDispatch();
  const usernameCliente = useSelector(
    (state) => state.cliente?.clienteFetch?.username
  );
  const gestoreToken = useSelector(
    (state) => state.cliente?.clienteFetch?.accessToken
  );

  useEffect(() => {
    (async () => {
      let data = await allClienti();
      dispatch({
        type: ALL_USER,
        payload: data,
      });
    })();
    (async () => {
      let data = await fetchCliente(usernameCliente, gestoreToken);
      console.log(data);
      dispatch({
        type: CLIENTE,
        payload: data,
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await fetchCorsi(gestoreToken);
      console.log(data);
      dispatch({
        type: CORSI_ALL,
        payload: data,
      });
    })();
    (async () => {
      const data = await allInsegnanti(gestoreToken);
      console.log(data);
      dispatch({
        type: ALL_INSEGNANTI,
        payload: data,
      });
    })();
  }, []);

  return (
    <>
      <IndividualIntervalsExample />
      <br />
      <GymPage />
    </>
  );
}

export default HomePage;
