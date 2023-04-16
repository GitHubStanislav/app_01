import { useState } from "react";
import "./App.css";
import PetInfo from "./components/PetInfo";
import RandomNumber from "./components/RandomNamber";
import UseStateExample1 from "./reactExamples/UseStateExample1";
import UseStateTest from "./reactExamples/UseStateTest";
import Button from "./components/counterTest/Button";
import Counter from "./components/counterTest/Counter";
import PersonMap1 from "./components/mapTest/PersonMap1";
import persons from "./components/mapTest/persons";

const texts = ["click me1", "click me2", "click me3", "push me"];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <PetInfo animal="cat" age="15" hasPet={true} />
      <PetInfo animal="dog" age={25} hasPet={false} />
      <RandomNumber maxNum={500} />
      <UseStateExample1 />
      <UseStateTest />

      <div className="counter_map">
        <Counter count={count} />
        {texts.map((text) => {
          return <Button onClick={incrementCount} text={text} key={text} />;
        })}
      </div>

      <div>
        {persons.map((person) => {
          return <PersonMap1 {...person} key={person.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
