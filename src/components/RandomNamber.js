// props, деструктуризація параметрів props
// хук useState

import {useState} from "react";
import generateRandomNum from "../Utils/generateRandomNum";



function RandomNumber() {
   // const {maxNum} = props
    console.log()
    const [randomNum, setRandomNum] = useState(generateRandomNum());
    const changeRandomNum = () => {
        setRandomNum(generateRandomNum());
    };
    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNum}>Generate new number</button>
        </div>
    );
}

export default RandomNumber;
