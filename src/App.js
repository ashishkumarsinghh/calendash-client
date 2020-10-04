import React from "react";

import "./App.css";
import Header from "./features/header/header";
import CreateAppointment from "./features/forms/createAppointment";
import AppointmentList from "./features/apptList/AppointmentList";
import { useAuth0 } from "@auth0/auth0-react";
import "./tailwind.output.css";
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <Header />
      {isAuthenticated && <CreateAppointment />}
      {isAuthenticated && <AppointmentList />}
    </div>
  );
}

export default App;
