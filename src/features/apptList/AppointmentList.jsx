import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function AppointmentList() {
  const [appts, setappts] = useState([]);
  const { user } = useAuth0();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://localhost:3000/appointment/" + user.email
      );
      const apptsData = await data.json();
      setappts(apptsData);
      //console.log(appts);
    };
    fetchData();
  }, [appts, user.email]);
  const deleteAppointment = (e) => {
    e.preventDefault();
    const deleteAppt = async () => {
      console.log(e.target.id);
      const data = await fetch(
        "http://localhost:3000/appointment/" + e.target.id,
        { method: "DELETE" }
      );
      console.log(data);
    };
    deleteAppt();
  };
  return (
    <div className="apptList">
      <h2 className="text-2xl m-3 px-6 font-extrabold">Your Appointments</h2>
      <ul>
        {appts.map((appt) => (
          <li className="m-4 px-4" key={appt._id}>
            <span className="font-semibold text-sm text-bold px-4 bg-gray-800 text-white py-3">
              {appt.date}
            </span>
            <span className=" font-semibold ml-2 text-sm text-bold px-4 bg-blue-700 text-white py-3">
              {appt.time}
            </span>
            <span className=" ml-2 text-sm text-light px-4 bg-blue-700 text-white py-3">
              {appt.description}
            </span>
            <span className="px-2">
              <button
                id={appt._id}
                onClick={deleteAppointment}
                className="mt-2 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>{" "}
    </div>
  );
}
