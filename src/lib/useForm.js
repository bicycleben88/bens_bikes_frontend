import React from "react";

const useForm = (initial = {}) => {
  const [inputs, setInputs] = React.useState(initial);
  const initialValues = Object.values(initial).join("");

  React.useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setInputs(initial);
  };

  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankState);
  };

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
};

export default useForm;
