import { useState } from "react";

function TodoForm() {
  const [toDo, setTodo] = useState("");
  const addTodo = (event) => {
    setTodo(event.target.value);
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <h1>Todo App</h1>
          <input value={toDo} type="text" placeholder="Enter new todo " />
        </label>
        <button onClick={addTodo}>Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
