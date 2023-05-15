import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./Scss/style.css";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import GymInfo from "./components/il_nostro_centro";
import GymNavbar from "./components/navbar";
import CorsiList from "./components/corsi";
import { Provider, useSelector } from "react-redux";
import { store } from "./Redux/Store";

function App() {
  const clienteFetch = useSelector((state) => state.cliente.clienteFetch);
  console.log(clienteFetch);

  return (
    <BrowserRouter>
      <GymNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="centro" element={<GymInfo />} />
        <Route path="corsi" element={<CorsiList />} />
      </Routes>
    </BrowserRouter>
  );
}

const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithRedux;
