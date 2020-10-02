import React from "react";

import "./App.css";
import LoginButton from "./features/login/loginButton";
import LogoutButton from "./features/login/logoutButton";

function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
