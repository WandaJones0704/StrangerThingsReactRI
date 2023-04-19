import React, { Component, useState } from "react";
import { loginUser } from "../api/users";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setToken }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await loginUser(username, password);
      if ((result.error && !result.data) || !result.success)
        return setErrorText(result.error.message);
      else {
        setToken(result.data.token);
        setErrorText(result.data.message);
        setTimeout(() => {
          navigate("/");
        }, 3 * 1000);
      }
      // localStorage.setItem("token", result.data.token);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
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
      </form>
      <h4>{errorText}</h4>
    </div>
  );
}
