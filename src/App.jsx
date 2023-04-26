import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Logout from "./components/Logout";
import NewPostForm from "./components/NewPostForm";
import HomePage from "./components/HomePage";
import AccountPage from "./components/AccountPage";
import MessageReplies from "./components/MessageReplies";
import AuthForm from "./components/auth/AuthForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/newpost" element={<NewPostForm />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/:postId" element={<MessageReplies />} />
      </Routes>
    </div>
  );
}

export default App;
