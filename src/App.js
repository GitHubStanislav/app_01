import { useState } from "react";
import "./App.css";
import PetInfo from "./components/PetInfo";
import RandomNumber from "./components/RandomNamber";
import UseStateExample1 from "./reactExamples/UseStateExample1";
import UseStateTest from "./reactExamples/UseStateTest";
import Button from "./components/counterTest/Button";
import Counter from "./components/counterTest/Counter";
import UsersList from "./components/userInfo/UsersList";
import Card from "./components/reactFragments/Card";
import Login from "./components/login/Login";
import ButtonDelete from "./components/counterTest/ButtonDelete";
import Wrapper from "./components/Wrapper";
import LoginTest from "./components/login/LoginTest";
import UseEffect from "./components/useEffect/UseEffect";
import UseStateTest2 from "./reactExamples/UseStateTest2";
import UseStateObject from "./reactExamples/UseStateObject";
import UseEffectExample from "./reactExamples/UseEffectExample";
import UseEffectExample1 from "./reactExamples/UseEffectExample1";
import PostsAsync from "./components/jsonPostsAsync/PostsAsync";
import CreateUser from "./components/createUserApp/CreateUser";
import StartApp from "./components/useEffect/ProjectUseEffect/StartApp";
import UseReducer from "./reactExamples/UseReducer";
import UseReducerTest from "./reactExamples/UseReducerTest";

const texts = ["click me1", "click me2", "click me3", "push me"];
const countInitial = () => {
  console.log("run function");
  return 1;
};

function App() {
  const [count, setCount] = useState(() => countInitial());
  const incrementCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <StartApp />
      <UseReducerTest />
      <UseReducer />
      <CreateUser />
      <PostsAsync />
      <UseEffectExample1 />
      <UseEffectExample />
      <UseStateObject />
      <UseStateTest2 />
      <LoginTest>Login User</LoginTest>
      <Wrapper color="lightblue">
        <UseEffect />
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Call me please</h2>
      </Wrapper>
      <Login />
      <Card />
      <PetInfo animal="cat" age="15" hasPet={true} />
      <PetInfo animal="dog" age={25} hasPet={false} />
      <RandomNumber maxNum={500} />
      <UseStateExample1 />
      <UseStateTest />

      <div>
        <div className="counter_map">
          <Counter count={count} />
        </div>
        <div className="counter_map">
          {texts.map((text) => {
            return <Button onClick={incrementCount} text={text} key={text} />;
          })}
        </div>

        {!!count && <ButtonDelete onClick={resetCount} />}
      </div>
      <UsersList />
    </div>
  );
}

export default App;
