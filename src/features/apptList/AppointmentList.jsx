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
  return (
    <div className="apptList">
      <h2 className="text-4xl text-bold">Your Appointments</h2>
      <ul>
        {appts.map((appt) => (
          <li>
            <span className="text-xl text-bold">
              {appt.date} {appt.time}
            </span>
            <span className="text-xl text-light">{appt.description}</span>
          </li>
        ))}
      </ul>{" "}
    </div>
  );
}
