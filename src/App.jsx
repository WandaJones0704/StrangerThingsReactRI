import { useState } from "react";
import "./App.css";

import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <RegisterForm />
    </div>
  );
}

export default App;
