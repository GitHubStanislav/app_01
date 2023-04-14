// потрібно використовувати унікальні ключі
import React from "react";
import generateRandomNum from "../Utils/generateRandomNum";
function UseStateExample1() {
  const [numbers, setNumbers] = React.useState([1, 2, 3]);
  const addNumber = () => {
      setNumbers([...numbers, generateRandomNum()])
  };

  return (
    <div>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Add number</button>
    </div>
  );
}
export default UseStateExample1;
