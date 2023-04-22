import { useState } from "react";
function UseStateTest2() {
  const [count, setCount] = useState(() => {
    return 4;
  });
  const incrementNumber = () => {
    setCount(count + 1);
  };
  const decrementNumber = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={decrementNumber}>-</button>
      <span>{count}</span>
      <button onClick={incrementNumber}>+</button>
    </>
  );
}

export default UseStateTest2;
