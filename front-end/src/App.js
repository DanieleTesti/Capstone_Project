import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import GymInfo from "./components/il_nostro_centro";
import GymNavbar from "./components/navbar";
import CorsiList from "./components/corsi";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import ClientiList from "./components/allClienti";
import Footer from "./components/footer";
import CorsiPage from "./components/allCorsi";

function App() {
  return (
    <BrowserRouter>
      <GymNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="centro" element={<GymInfo />} />
        <Route path="corsi" element={<CorsiList />} />
        <Route path="clienti" element={<ClientiList />} />
        <Route path="corsiPage" element={<CorsiPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithRedux;
