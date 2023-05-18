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

function HomePage() {
  const dispatch = useDispatch();
  const usernameCliente = useSelector(
    (state) => state.cliente?.clienteFetch?.username
  );
  // const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      let data = await allClienti();
      dispatch({
        type: ALL_USER,
        payload: data,
      });
    })();
    (async () => {
      let data = await fetchCliente(usernameCliente);
      console.log(data);
      dispatch({
        type: CLIENTE,
        payload: data,
      });
      const roleCliente = data?.roles?.map((role) => role?.roleName);
      // console.log(roleCliente.map((role) => role.roleName));
      // console.log(roleCliente);
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
