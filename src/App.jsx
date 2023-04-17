import { useState } from "react";
import "./App.css";

import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <RegisterForm />
    </div>
  );
}

export default App;
