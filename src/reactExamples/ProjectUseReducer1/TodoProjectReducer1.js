import React from "react";
import { ACTIONS } from "./UseReduceTest1";

const TodoProjectReducer1 = ({ id, name, complete, dispatch }) => {
  return (
    <div>
      <span style={{ color: complete ? "#AAA" : "#000" }}>{name}</span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default TodoProjectReducer1;
