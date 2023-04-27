import { useState } from "react";

function TodoForm() {
  const [toDo, setTodo] = useState("");
  const addTodo = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <label>
          <h1>Todo App</h1>
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={toDo}
            type="text"
            placeholder="Enter new todo "
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
