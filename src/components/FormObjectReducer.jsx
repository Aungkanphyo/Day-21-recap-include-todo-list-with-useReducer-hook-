import { useReducer } from "react";

const FormObjectReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "incrementAge": {
        return {
          name: state.name,
          age: parseInt(state.age) + 1,
        };
      }

      case "changeName": {
        return {
          name: action.nextName,
          age: state.age,
        };
      }
    }
    throw Error("Unknown action: " + action.type);
  };
  const initialValue = { name: "Taylor", age: 21 };
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleSubmit = () => {
    dispatch({ type: "incrementAge" });
  };

  const handleInput = (e) => {
    dispatch({ type: "changeName", nextName: e.target.value });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.name}
          onChange={handleInput}
          name="name"
          id="name"
        />
        <br />
        <button
          type="submit"
          className="bg-blue-500 py-1 px-2 text-white rounded-xl"
        >
          Increment age
        </button>
      </form>
      <br />
      <h3>
        Hello, {state.name}. You are {state.age}{" "}
      </h3>
    </div>
  );
};

export default FormObjectReducer;
