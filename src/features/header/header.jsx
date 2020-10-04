import React from "react";
import LogoutButton from "../login/logoutButton";
export default function Header() {
  return (
    <React.Fragment>
      <div className="bg-gray-800">
        <h1 className="text-white text-4xl text-center">Calendash</h1>
      </div>

      <div className="p-4">
        <LogoutButton />
      </div>
    </React.Fragment>
  );
}
