import { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0)
    let incCount= () => {
        setCount(count+1)
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count!</button>
        </div>
    )
}


function handleHover() {
    console.log("Hover");
}

function Hover() {
    return (
        <div>
            <button onMouseOver={handleHover}>Hover over me!</button>
        </div>
    )
}

export {Counter, Hover};