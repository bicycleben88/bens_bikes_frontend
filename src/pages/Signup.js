import React from "react";
import Form from "../components/Form";
import FormStyles from "../components/styles/FormStyles";
import { GlobalContext } from "../App";

const Signup = (props) => {
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const [formData, setFormData] = React.useState({
    email: "",
    username: "",
    password: "",
  });

  const signUpUser = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    await console.log(data);
    // props.history.push("/login");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <FormStyles onSubmit={signUpUser}>
      <h2>Sign Up For an Account</h2>

      <input
        name="email"
        placeholder="email"
        value={formData.email}
        type="text"
        onChange={handleChange}
      />
      <input
        name="username"
        placeholder="username"
        value={formData.username}
        type="text"
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="password"
        value={formData.password}
        type="password"
        onChange={handleChange}
      />
      <input value="Sign Up" type="submit" className="submit-button" />
    </FormStyles>
  );
};

export default Signup;
