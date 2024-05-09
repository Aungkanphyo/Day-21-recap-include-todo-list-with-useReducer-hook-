import React, { act, useReducer } from "react";

const AgeReducer = () => {
  const AgeReducer = (state, action) => {
    if (action.type === "increment age") {
      state.age + 1;
    }
  };
  const [age, dispatch] = useReducer(AgeReducer, { age: 20 });
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment age" })}>
        Increment age :{" "}
      </button>
      <h3>Hello! You are {age}</h3>
    </div>
  );
};

export default AgeReducer;
