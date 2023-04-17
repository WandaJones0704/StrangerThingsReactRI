import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <Routes>
        <Route path="/" element={<img src="../../logo.jpg" alt="" className="nav-image"></img>} />
        <Route path="/register" element={<a>Register</a>} />
        <Route path="/login" element={<a>Login</a>} />
      </Routes>
    </nav>
  );
}
