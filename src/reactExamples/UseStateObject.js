import { useState } from "react";
function UseStateObject() {
  const [state, setState] = useState({ color: "red", count: 0 });
  const count = state.count;
  const color = state.color;
  const increment = () => {
    console.log("use state");
    setState({ ...state, count: count + 1 });
  };
  return (
    <div>
      <p>
        {count} {color}
      </p>
      <button onClick={increment}>Click</button>
    </div>
  );
}
export default UseStateObject;
