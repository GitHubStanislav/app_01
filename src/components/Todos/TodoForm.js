function TodoForm() {
  const addTodo = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <label>
          <h1>Todo App</h1>
          <input type="text" placeholder="Enter new todo " />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
