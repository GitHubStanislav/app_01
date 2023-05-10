import { useReducer } from "react";

const initialValue = { count: 10 };
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  PLUS: "plus",
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTIONS.PLUS:
      return { ...state, count: state.count + payload };
    default:
      return state;
  }
};

function UseReducerTest() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const incrementNumber = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrementNumber = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const incrementPlus = () => {
    dispatch({ type: ACTIONS.PLUS, payload: 300 });
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
