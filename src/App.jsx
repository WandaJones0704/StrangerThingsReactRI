import "./App.css";
import RegisterForm from "./components/auth/RegisterForm";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import Logout from "./components/Logout";
import NewPostForm from "./components/NewPostForm";
import HomePage from "./components/HomePage";
import AccountPage from "./components/AccountPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/newpost" element={<NewPostForm />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
