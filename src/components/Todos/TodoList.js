import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <div>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todos} />
      ))}
    </div>
  );
}

export default TodoList;
