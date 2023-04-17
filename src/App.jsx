import { useState } from "react";
import "./App.css";

import RegisterForm from "./components/RegisterForm";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <RegisterForm />
    </div>
  );
}

export default App;
