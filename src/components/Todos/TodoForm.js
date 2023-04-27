import { useState } from "react";

function TodoForm() {
  const [toDo, setTodo] = useState("");
  const addTodo = () => {
      setTodo()
  };
  return (
    <div>
      <form>
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
