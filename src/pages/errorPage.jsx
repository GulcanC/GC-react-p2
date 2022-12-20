import React from "react";
import { Navlink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404 ERROR PAGE</h1>
      <p>Soory, This page does not exist</p>
      <Navlink to="/" className="link">
        Go Back
      </Navlink>
    </div>
  );
};

export default ErrorPage;
