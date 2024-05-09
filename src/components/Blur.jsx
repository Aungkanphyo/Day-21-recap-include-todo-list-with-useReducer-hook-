import React, { useState } from "react";

const Blur = () => {
  const [value, setValue] = useState("");

  const handleBlur = () => {
    console.log("Input field lost focus. Value:", value);
    // Perform any action or validation here
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter text"
      />
    </div>
  );
};

export default Blur;
