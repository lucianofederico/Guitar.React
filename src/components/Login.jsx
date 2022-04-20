import React from "react";
import LogoutButton from "./UserLogout";
import LoginButton from "./UserLogin";
import { useState } from "react";

const Login = () => {
  const [loginButton, setloginButton] = useState(false);
  const [logoutButton, setlogoutButton] = useState(true);

  const handleSubmit = (resp) => {
    setloginButton(false);
    setlogoutButton(true);
  };

  const loginFail = (res) => {
    alert("Login failed: ", res);
  };
  const logoutSuccess = () => {
    alert(" You have been signed out successfully");
    setloginButton(true);
    setlogoutButton(false);
  };
  return (
    <div className="login">
      {loginButton ? (
        <div>
          <LoginButton />
        </div>
      ) : null}

      {logoutButton ? (
        <>
          <div>
            <p>
              Hola, <strong> AGUSTIN!!!</strong>
            </p>
          </div>
          <div>
            <LogoutButton />
          </div>
        </>
      ) : null}
    </div>
  );
};
export default Login;
