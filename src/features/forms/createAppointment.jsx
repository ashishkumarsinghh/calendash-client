import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
export default function CreateAppointment() {
  const { user } = useAuth0();
  const createAppointment = async (e) => {
    e.preventDefault();
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#apptDate").value;
    const time = document.querySelector("#apptTime").value;
    const userId = user.email;
    const data = { description, date, time, userId };
    const response = await fetch("http://localhost:3000/appointment", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response.json());
  };

  return (
    <div className="caForm">
      <label htmlFor="description">Description of Appointment</label>
      <input type="text" id="description" />
      <label htmlFor="apptDate">Date</label>
      <input type="date" id="apptDate" />
      <label htmlFor="apptTime">Time</label>
      <input type="time" id="apptTime" />
      <button onClick={createAppointment}>New Appointment</button>
    </div>
  );
}
