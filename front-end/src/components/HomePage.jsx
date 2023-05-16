import IndividualIntervalsExample from "./first_section";
import GymPage from "./midSection_Home";
import {
  FETCH_CLIENTE,
  fetchCliente,
} from "../Redux/ActionTypes/clienteAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let data = await fetchCliente();

      dispatch({
        type: FETCH_CLIENTE,
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
