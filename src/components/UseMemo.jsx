import React from "react";
import { useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(1);
  const [value, setValue] = useState(1);
  const [double, setDouble] = useState(1);
  const getDouble = slowFunction(value);
  return (
    <div>
      <h1>Add number</h1>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>Add number</button>
      <br />

      <h1>Add value</h1>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Add value</button>
      <br />

      <h1>Add double</h1>
      <h2>{double}</h2>
      <button onClick={() => setDouble(getDouble)}>Double</button>
    </div>
  );
}

function slowFunction(number) {
  console.log("slow function working.");
  for (let i = 0; i < 10000; i++) {}
  const double = number * 2;

  return double;
}

export default UseMemo;
