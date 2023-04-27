function Todo({ todo, index, deleteTodo }) {
  return (
    <div onDoubleClick={() => deleteTodo(index)}>
      <h3>{todo}</h3>
    </div>
  );
}

export default Todo;
