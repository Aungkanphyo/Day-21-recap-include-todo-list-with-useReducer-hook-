import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const Increment = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Increment;
