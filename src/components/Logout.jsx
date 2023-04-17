import React, { Component } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  localStorage.clear();

  setTimeout(() => {
    navigate("/");
  }, 2 * 1000); // 2 seconds
  return (
    <div>
      <h1>User successfully logged out!</h1>
    </div>
  );
}
