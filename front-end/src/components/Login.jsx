import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "../api/axios";
import { FETCH_CLIENTE } from "../Redux/ActionTypes/clienteAction";
import { useDispatch, useSelector } from "react-redux";
const LOGIN_URL = "/api/auth/login";

const Login = () => {
  const { setAuth } = useAuth();

  // const fetchAllClienti = useSelector((state) => state.AllUsers);
  // const clienteFetchato = useSelector((state) => state.cliente);

  const [autenticato, setAutenticato] = useState(setAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const usernameRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  useEffect(() => {
    if (success) {
      navigate("/");
      // setSuccess(false);
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const id = response?.data?.id;
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      console.log(id, roles);

      setAutenticato({ id, username, password, roles, accessToken });

      dispatch({
        type: FETCH_CLIENTE,
        payload: { id, username, accessToken, roles },
      });

      setUsername("");
      setPassword("");
      setSuccess(true);
      navigate(from, { replace: true });
    } catch (error) {
      console.log("Errore");

      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <div className="Login">
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <Link to={"/"} className="MyLink2">
              Go to Home
            </Link>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={usernameRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <br />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default Login;
