import React, { Component, useState } from "react";
import { registerUser } from "../../api/users";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { token, setToken, isLoggedIn, setIsLoggedIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await registerUser(username, password);
      setToken(result.data.token);
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
      navigate("/account");
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
        <button type="submit">Register</button>
      </form>
      <Link to="/login">
        <p>Already have an account? Login</p>
      </Link>
    </div>
  );
}
