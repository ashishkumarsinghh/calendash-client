import React from "react";

import "./App.css";
import Header from "./features/header/header";
import CreateAppointment from "./features/forms/createAppointment";
function App() {
  return (
    <div className="App">
      <Header />
      <CreateAppointment />
    </div>
  );
}

export default App;
