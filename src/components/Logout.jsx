import React, { Component, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Logout() {
  const navigate = useNavigate();

  const { setToken, setUser } = useAuth();
  setToken(null);
  setUser(null);
  localStorage.clear();

  useEffect(() => {
    async function redirect() {
      setTimeout(() => {
        navigate("/");
      }, 2 * 1000); // 2 seconds
    }
    redirect();
  }, []);

  return (
    <div>
      <h1>User successfully logged out!</h1>
    </div>
  );
}
