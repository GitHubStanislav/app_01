import { useState } from "react";
import "./App.css";
import PetInfo from "./components/PetInfo";
import RandomNumber from "./components/RandomNamber";
import UseStateExample1 from "./reactExamples/UseStateExample1";
import UseStateTest from "./reactExamples/UseStateTest";
import Button from "./components/counterTest/Button";
import Counter from "./components/counterTest/Counter";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <PetInfo animal="cat" age="15" hasPet={true} />
      <PetInfo animal="dog" age={25} hasPet={false} />
      <RandomNumber maxNum={500} />
      <UseStateExample1 />
      <UseStateTest />
      <Counter count={count} />
      <Button count={count} onClick={setCount} />
      <Button count={count} onClick={setCount} />
    </div>
  );
}

export default App;
