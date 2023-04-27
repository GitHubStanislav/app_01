
import {useState} from "react";
import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";


function App() {
 const [todos , setTodos] = useState([])
  return (
    <div className="App">
        <TodoForm/>
        <TodoList todos={todos}/>
    </div>
  );
}

export default App;
