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
    const response = await fetch(
      "https://calendash-server.herokuapp.com/appointment",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",

          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      }
    );
    document.querySelector("#description").value = "";
    document.querySelector("#apptDate").value = "";
    document.querySelector("#apptTime").value = "";
    console.log(response.json());
  };

  return (
    <div className="caForm">
      <h2 className="text-2xl ml-2 px-6  font-extrabold">
        Create New Appointment
      </h2>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2"
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
          className="block text-gray-700 text-sm font-bold mb-2"
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
          className="block text-gray-700 text-sm font-bold mb-2"
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
          className="mt-2 w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create
        </button>
      </form>
    </div>
  );
}
