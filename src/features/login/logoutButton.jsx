import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={
        isAuthenticated
          ? () => logout({ returnTo: window.location.origin })
          : () => loginWithRedirect()
      }
      className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {isAuthenticated ? `Log Out` : `Log In`}
    </button>
  );
};

export default LogoutButton;
