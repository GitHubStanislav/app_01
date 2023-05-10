import { useReducer, useState } from "react";
const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    default:
      return new Error();
  }
};

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};
const ACTIONS = {
  ADD_TODO: "add-todo",
};

const UseReduceTest1 = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };
  console.log(todos);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </>
  );
};

export default UseReduceTest1;
