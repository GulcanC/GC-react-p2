import React from "react";
import { NavLink } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <TbFaceIdError className="error-icon" />
      <h1>404 Error!</h1>
      <p>Sorry, This page does not exist !!!</p>
      <div className="error-link">
        <NavLink to="/" className="error-link">
          Go Back to Home Page &rarr;
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
