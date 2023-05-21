import { createStore } from "redux";
const initialState = { counter: 0, isCounterIsVisible: false };
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
      isCounterIsVisible: state.isCounterIsVisible,
    };
  }
  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.number,
      isCounterIsVisible: state.isCounterIsVisible,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
      isCounterIsVisible: state.isCounterIsVisible,
    };
  }
  if (action.type === "visibility") {
    return {
      counter: state.counter,
      isCounterIsVisible: !state.isCounterIsVisible,
    };
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
