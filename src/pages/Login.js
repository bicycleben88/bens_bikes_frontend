import React from "react";
import Form from "../components/Form";
import { GlobalContext } from "../App";

const Login = (props) => {
  const { globalState, setGlobalState } = React.useContext(GlobalContext);
  const { url } = globalState;

  const logInUser = async (user) => {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    await window.localStorage.setItem("token", JSON.stringify(data.token));
    await setGlobalState({
      ...globalState,
      token: data.token,
      userId: data.user.id,
    });
    props.history.push("/");
  };

  return <Form label="Log In" submit={logInUser} />;
};

export default Login;
