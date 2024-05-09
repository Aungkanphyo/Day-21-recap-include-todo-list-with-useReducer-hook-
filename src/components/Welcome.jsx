import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const Welcome = () => {
  const { name, logout } = useContext(FormContext);
  return (
    <div className="bg-blue-500 w-[300px] m-auto mt-4 rounded-lg text-white">
      <div className="p-4">
        <h3>
          <span className="text-xl text-yellow-500">Welcome </span>
          {name}
        </h3>
        <button
          onClick={logout}
          className="py-1 px-3 bg-red-500 rounded-lg mt-3 ml-48"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;
