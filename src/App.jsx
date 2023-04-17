import { useState } from "react";
import "./App.css";

import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
