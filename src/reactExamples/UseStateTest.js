import {useState} from "react";

function UseStateTest () {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }
    return(
   <div>
       <p>{counter}</p>
       <button onClick={increment}>Click</button>
   </div>
    )
}

export default UseStateTest