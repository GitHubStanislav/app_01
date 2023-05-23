import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, isCounterIsVisible: false };

createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.number;
    },

    setCounterVisibility(state) {
      state.isCounterIsVisible = !state.isCounterIsVisible;
    },
  },
});
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
