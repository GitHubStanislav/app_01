import { useReducer } from "react";

const initialValue = { count: 10 };

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "plus":
      return { count: state.count + payload };
    default:
      return state;
  }
};

function UseReducerTest() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const incrementNumber = () => {
    dispatch({ type: "increment" });
  };

  const decrementNumber = () => {
    dispatch({ type: "decrement" });
  };

  const incrementPlus = () => {
    dispatch({ type: "plus", payload: 300 });
  };

  return (
    <>
      <span>{state.count}</span>
      <button onClick={decrementNumber}>-</button>
      <button onClick={incrementNumber}>+</button>
      <button onClick={incrementPlus}>plus</button>
    </>
  );
}

export default UseReducerTest;
