import React, { useState } from "react";

export const FormContext = React.createContext();
const FormProvider = ({ children }) => {
  const [name, setName] = useState("");
  //   const [isSubmit, setIsSubmit] = useState(false);

  const login = (data) => {
    setName(data);
  };

  const logout = () => {
    setName(null);
  };

  return (
    <FormContext.Provider value={{ name, setName, login, logout }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormProvider;
