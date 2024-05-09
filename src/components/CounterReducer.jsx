import React, { act, useReducer, useState } from "react";

const CounterReducer = () => {
  const Counter = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + action.payload;
      case "DECREMENT":
        return state - action.payload;
      case "FIVEINCRE":
        return state + action.payload;
      case "FIVEDECRE":
        return state - action.payload;
      case "ByNumber":
        return state + Number(action.payload);
    }
  };
  const [count, disptach] = useReducer(Counter, 0);
  const [num, setNum] = useState(0);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button
        className="bg-red-400"
        onClick={() => disptach({ type: "INCREMENT", payload: 1 })}
      >
        1 increment
      </button>
      <button
        className="bg-blue-400"
        onClick={() => disptach({ type: "DECREMENT", payload: 1 })}
      >
        1 decrement
      </button>
      <button
        className="bg-green-400"
        onClick={() => disptach({ type: "FIVEINCRE", payload: 5 })}
      >
        5 increment
      </button>
      <button
        className="bg-pink-400"
        onClick={() => disptach({ type: "FIVEDECRE", payload: 5 })}
      >
        5 decrement
      </button>
      <br />
      <input
        type="number"
        onChange={(e) => setNum(e.target.value)}
        name="number"
        id="number"
        className="border border-black"
      />
      <button onClick={() => disptach({ type: "ByNumber", payload: num })}>
        By number
      </button>
    </div>
  );
};

export default CounterReducer;
