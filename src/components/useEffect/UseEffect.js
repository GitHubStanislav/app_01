import { useEffect, useState } from "react";

function UseEffect() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);
  console.log(todo);
  return (
    <>
      {todo && <h1>{todo.title}</h1>}
      {todo && <p>{todo.userId}</p>}
    </>
  );
}

export default UseEffect;
