import React from "react";
import { GlobalContext } from "../App";

const useUser = () => {
  const { globalState } = React.useContext(GlobalContext);
  const { url, token } = globalState;
  console.log(token);
  const getUser = async () => {
    const response = await fetch(`http://localhost:3000/auto_login`, {
      headers: {
        "Content-Type": "application/JSON",
        Authorization:
          "bearer: eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.VNqXj0cIwQRJ-dAKgfdWMF9Hmmh6d8wc7dYj1hdm09U",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  };
  getUser();
};

export default useUser;
