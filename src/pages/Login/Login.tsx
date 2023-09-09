import React from "react";
import "./Login.stylesheet.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login-container">
      <Link className="login-btn" to="/Dashboard">
        Login
      </Link>
    </div>
  );
};
