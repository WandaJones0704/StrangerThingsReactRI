import { useState } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import NewPost from "./components/NewPost";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/login" element={<LoginForm setToken={setToken} />} />
        <Route
          path="/register"
          element={<RegisterForm setToken={setToken} />}
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/newpost" element={<NewPost token={token} />} />
      </Routes>
    </div>
  );
}

export default App;
