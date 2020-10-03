import React from "react";
import LoginButton from "../login/loginButton";
import LogoutButton from "../login/logoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="header">
      <h1>Calendash</h1>
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
    </div>
  );
}
