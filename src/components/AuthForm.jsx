import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";
import Welcome from "./Welcome";
import Form from "./Form";

const AuthForm = () => {
  const { name } = useContext(FormContext);
  return <div>{name ? <Welcome /> : <Form />}</div>;
};

export default AuthForm;
