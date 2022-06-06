import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const value = useContext(AuthContext);
  const [form, setForm] = useState({
    email: "eve.holt@reqres.in",
    password: "12345",
  });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const submitHandler = () => {
    if (form.email === "" || form.password === "") {
      return;
    } else {
      value.setIsAuth(true);
      navigate("/Products", { replace: true });
    }
  };
  return (
    <div
      style={{
        display: "flex",
        width: "40%",
        gap: "25px",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      Login
      <input
        data-cy="login-email"
        name="email"
        value={form.email}
        onChange={changeHandler}
      />
      <input
        data-cy="login-password"
        name="password"
        value={form.password}
        onChange={changeHandler}
      />
      <button onClick={submitHandler} data-cy="login-submit">
        Login
      </button>
    </div>
  );
};

export default Login;
