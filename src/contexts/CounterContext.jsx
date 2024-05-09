import React from "react";
import { useState } from "react";

export const CounterContext = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);
  return (
    <CounterContext.Provider
      value={{
        count,
        setCount,
        theme,
        setTheme,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
export default CounterProvider;
