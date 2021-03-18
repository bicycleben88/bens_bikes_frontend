import React from "react";
import ErrorStyles from "../components/styles/ErrorStyles";

const Error = ({ history }) => {
  return (
    <ErrorStyles>
      <h1>Sorry, something went wrong</h1>
      <h3>{history.location.state.error}</h3>
    </ErrorStyles>
  );
};

export default Error;
