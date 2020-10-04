import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-gray-800 text-white pt-1 pb-1 pl-3 pr-3 rounded-full"
    >
      Log In
    </button>
  );
};

export default LoginButton;
