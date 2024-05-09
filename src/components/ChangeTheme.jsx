import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const ChangeTheme = () => {
  const { theme, setTheme } = useContext(CounterContext);
  return (
    <div>
      <button className="bg-blue-400" onClick={() => setTheme(!theme)}>
        Change theme
      </button>
    </div>
  );
};

export default ChangeTheme;
