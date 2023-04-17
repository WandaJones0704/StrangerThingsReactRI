import { useState } from "react";
import "./App.css";

import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import LoginForm from "./components/LoginForm";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
