import { useReducer } from "react";
import TodoComponent from "./TodoComponent";

export const TODOS_ACTIONS = {
  ADD_TASK: "add_task",
  DELETE_TASK: "delete_task",
  RESET: "reset",
  EDIT: "edit",
};

const TodoList = () => {
  let initialValue = [];
  const reducer = (state, action) => {
    switch (action.type) {
      case TODOS_ACTIONS.ADD_TASK:
        return [
          ...state,
          {
            id: state.length + 1,
            name: action.payload,
          },
        ];

      case TODOS_ACTIONS.DELETE_TASK:
        return state.filter((state) => state.id !== action.id);

      case TODOS_ACTIONS.EDIT: {
        const id = state.findIndex((todo) => todo.id === action.payload.id);
        state.name = action.payload.name;
        const editedTodo = Object.assign([], state);
        editedTodo.splice(id, 1, action.payload);
        return [...editedTodo];
      }

      case TODOS_ACTIONS.RESET:
        return init(action.payload);
    }
  };

  function init(initialValue) {
    return initialValue;
  }

  const [todos, dispatch] = useReducer(reducer, initialValue, init);

  return (
    <div key={todos.id} className="ms-4">
      <h2>Todo list {todos.length}</h2>
      <input
        className="border border-black"
        type="text"
        name="name"
        id="name"
        onBlur={(e) =>
          dispatch({ type: TODOS_ACTIONS.ADD_TASK, payload: e.target.value })
        }
      />
      <button
        className="bg-blue-400 py-1 ms-3 px-2 rounded-lg text-white"
        onClick={() =>
          dispatch({ type: TODOS_ACTIONS.RESET, payload: initialValue })
        }
      >
        Reset
      </button>
      <br />
      {todos.map((todo) => (
        <TodoComponent
          key={todo.id}
          todo={todo}
          remove={() =>
            dispatch({ type: TODOS_ACTIONS.DELETE_TASK, id: todo.id })
          }
          edit={(text) =>
            dispatch({
              type: TODOS_ACTIONS.EDIT,
              payload: { id: todo.id, name: text },
            })
          }
        />
      ))}
    </div>
  );
};

export default TodoList;
