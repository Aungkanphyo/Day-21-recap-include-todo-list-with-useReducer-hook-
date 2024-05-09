import React, { useContext, useState } from "react";
import { FormContext } from "../contexts/FormContext";

const Form = () => {
  const [data, setData] = useState("");
  const { login } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(data);
  };

  return (
    <div className="bg-blue-500 w-[300px] m-auto mt-4 rounded-lg text-white">
      <div className="p-4">
        {/* login form */}
        <h2>Please login</h2>
        <div className="pt-4">
          <form action="" onSubmit={handleSubmit}>
            <div>
              <input
                className="border border-black text-black outline-none p-2 rounded-lg"
                type="text"
                id="name"
                name="name"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </div>
            <button
              className="bg-green-500 py-1 px-3 rounded-lg mt-3"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
