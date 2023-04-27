import { useState } from "react";

function TodoForm() {
  const [toDo, setTodo] = useState("");
  const addTodo = (event) => {
    event.preventDefault()
    setTodo(event.target.value);
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <label>
          <h1>Todo App</h1>
          <input value={toDo} type="text" placeholder="Enter new todo " />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
