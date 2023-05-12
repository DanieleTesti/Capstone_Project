import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./Scss/style.css";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import GymInfo from "./components/il_nostro_centro";
import GymNavbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <GymNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="centro" element={<GymInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
