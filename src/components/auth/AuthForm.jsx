import React, { Component, useState } from "react";
import { loginUser, registerUser } from "../../api/users";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function AuthForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const { token, setToken, isLoggedIn, setIsLoggedIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let result = null;
      if (location.pathname === "/login") {
        result = await loginUser(username, password);
      } else {
        console.log("registering user");
        result = await registerUser(username, password);
      }
      if ((result.error && !result.data) || !result.success)
        return setErrorText(result.error.message);
      else {
        setToken(result.data.token);
        setIsLoggedIn(true);
        setUsername("");
        setPassword("");
        navigate("/account");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="main-div">
      <h4>{errorText}</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Login</button>
        {location.pathname === "/login" ? (
          <Link to="/register">
            <p>Don't have an account? Register</p>
          </Link>
        ) : (
          <Link to="/login">
            <p>Already have an account? Login</p>
          </Link>
        )}
      </form>
    </div>
  );
}
