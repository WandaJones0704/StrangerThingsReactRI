import "./App.css";
import RegisterForm from "./components/auth/RegisterForm";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import LoginForm from "./components/auth/LoginForm";
import Logout from "./components/Logout";
import NewPostForm from "./components/NewPostForm";
import useAuth from "./hooks/useAuth";

function App() {
  const { token, user } = useAuth();

  console.log(token);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/newpost" element={<NewPostForm />} />
      </Routes>
    </div>
  );
}

export default App;
