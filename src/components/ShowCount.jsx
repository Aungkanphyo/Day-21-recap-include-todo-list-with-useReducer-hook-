import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const ShowCount = () => {
  const { count } = useContext(CounterContext);
  return (
    <div>
      <h3>Count value : {count}</h3>
    </div>
  );
};

export default ShowCount;
