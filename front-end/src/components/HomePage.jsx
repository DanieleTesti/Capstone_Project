import IndividualIntervalsExample from "./first_section";
import GymPage from "./midSection_Home";
import { ALL_USER, allClienti } from "../Redux/ActionTypes/clienteAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let data = await allClienti();
      console.log(data);
      dispatch({
        type: ALL_USER,
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
