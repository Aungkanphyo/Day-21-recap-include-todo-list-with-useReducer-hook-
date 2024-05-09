import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const Theme = ({ children }) => {
  const { theme } = useContext(CounterContext);
  return (
    <div
      className={`${theme ? "bg-blue-400" : "bg-red-500"} ${
        theme && "text-white"
      } h-screen`}
    >
      {children}
    </div>
  );
};

export default Theme;
