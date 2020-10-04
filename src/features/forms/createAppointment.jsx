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
      <h2 className="text-2xl m-2 px-4">Create New Appointment</h2>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
        <label
          htmlFor="description"
          class="block text-gray-700 text-sm font-bold mb-2"
        >
          Description of Appointment
        </label>
        <input
          type="text"
          id="description"
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-1"
        />
        <br />
        <label
          htmlFor="apptDate"
          class="block text-gray-700 text-sm font-bold mb-2"
        >
          Date
        </label>
        <input
          type="date"
          id="apptDate"
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 mb-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <label
          htmlFor="apptTime"
          class="block text-gray-700 text-sm font-bold mb-2"
        >
          Time
        </label>
        <input
          type="time"
          id="apptTime"
          className="shadow appearance-none border mb-1 rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <button
          onClick={createAppointment}
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create
        </button>
      </form>
    </div>
  );
}
