import React from "react";

import "./App.css";
import Header from "./features/header/header";
import CreateAppointment from "./features/buttons/createAppointment";
function App() {
  return (
    <div className="App">
      <Header />
      <CreateAppointment />
    </div>
  );
}

export default App;
