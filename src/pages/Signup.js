import React from "react";
import useForm from "../lib/useForm";
import FormStyles from "../components/styles/FormStyles";
import { GlobalContext } from "../App";

const Signup = () => {
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    username: "",
    password: "",
  });
  const [signedUpUser, setSignedUpUser] = React.useState(false);

  const signUpUser = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(inputs),
    });
    const data = await response.json();
    resetForm();
    return (await data) && setSignedUpUser(true);
  };

  return (
    <FormStyles onSubmit={signUpUser}>
      <h2>Sign Up For an Account</h2>
      <input
        name="email"
        placeholder="email"
        value={inputs.email}
        type="text"
        onChange={handleChange}
      />
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
      <input value="Sign Up" type="submit" className="submit-button" />

      {signedUpUser && (
        <h3 style={{ color: "darkorange" }}>
          Check Your Email to Activate your Account
        </h3>
      )}
    </FormStyles>
  );
};

export default Signup;
