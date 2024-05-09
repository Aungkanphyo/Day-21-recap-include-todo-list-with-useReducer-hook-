import { useState } from "react";
const TodoComponent = ({ todo, remove, edit }) => {
  // control input box appear or not for edit task
  const [mode, setMode] = useState("list");

  // for storing edited task name
  const [taskName, setTaskName] = useState(todo.name);

  return (
    <ul className="ms-4">
      {mode === "list" ? (
        <span>
          <li className="mt-3">
            {todo.name}
            <button
              onClick={() => setMode("edit")}
              className="bg-green-500 px-2 rounded-lg ms-3 me-3 text-white"
            >
              Edit
            </button>
            <button
              onClick={remove}
              className="bg-red-500 px-2 rounded-lg text-white"
            >
              Delete
            </button>
          </li>
        </span>
      ) : (
        <div className="mt-3">
          <input
            type="text"
            name="text"
            className="border border-black"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button
            onClick={() => {
              edit(taskName);
              setMode("list");
            }}
            className="bg-blue-500 px-2 rounded-lg ms-3 me-3 text-white"
          >
            Save
          </button>
          <button
            onClick={() => setMode("list")}
            className="bg-red-500 px-2 rounded-lg text-white"
          >
            Cancel
          </button>
        </div>
      )}
    </ul>
  );
};

export default TodoComponent;
