import React from "react";
import { GlobalContext } from "../App";
import useForm from "../lib/useForm";
import FormStyles from "../components/styles/FormStyles";

const Login = (props) => {
  const { globalState, setGlobalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const { inputs, handleChange, resetForm } = useForm({
    username: "",
    password: "",
  });

  const logInUser = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(inputs),
    });
    const data = await response.json();
    if (data.error) {
      props.history.push("/error", {
        error: data.error,
      });
    }
    if (data.user) {
      await window.localStorage.setItem("token", JSON.stringify(data.token));
      await setGlobalState({
        ...globalState,
        token: data.token,
        userId: data.user.id,
      });
      props.history.push("/");
    }
  };

  return (
    <FormStyles onSubmit={logInUser}>
      <h2>Log In</h2>
      <input
        name="username"
        placeholder="username"
        value={inputs.username}
        type="text"
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="password"
        value={inputs.password}
        type="password"
        onChange={handleChange}
      />
      <input value="Log In" type="submit" className="submit-button" />
    </FormStyles>
  );
};

export default Login;
