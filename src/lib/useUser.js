import React from "react";
import { GlobalContext } from "../App";
const bearer = process.env.BEARER;

const useUser = () => {
  const { globalState } = React.useContext(GlobalContext);
  const { url, token } = globalState;
  console.log(token);
  const getUser = async () => {
    const response = await fetch(`${url}/auto_login`, {
      headers: {
        "Content-Type": "application/JSON",
        Authorization: `bearer: ${bearer}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  };
  getUser();
};

export default useUser;
