import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../App.css";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function NavBar() {
  return (
    <nav>
      <img src="../../logo.jpg" alt="" className="nav-image"></img>
    </nav>
  );
}
