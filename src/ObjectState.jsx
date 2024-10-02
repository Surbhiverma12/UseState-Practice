import { useState } from "react";

export default function ObjectState() {
    let [move, setMove] = useState({blue: 0, red: 0, yellow: 0, green: 0});

    let setBlue = () => {
        setMove((preMove) => {
            return {...preMove, blue: preMove.blue+1}
        }
        )
    }

    let setRed = () => {
        setMove((preMove) => {
            return {...preMove, red: preMove.red+1}
        }
        )
    }

    let setYellow = () => {
        setMove((preMove) => {
            return {...preMove, yellow: preMove.yellow+1}
        }
    )
    }

    let setGreen = () => {
        setMove((preMove) => {
            return {...preMove, green: preMove.green+1}
        }
        )
    }
    return(
        <div>
            <h3>Blue moves = {move.blue}</h3>
            <button style={{backgroundColor: "blue"}} onClick={setBlue}>+1</button>
            <h3>Red moves = {move.red}</h3>
            <button style={{backgroundColor: "red"}} onClick={setRed}>+1</button>
            <h3>Yellow moves = {move.yellow}</h3>
            <button style={{backgroundColor: "yellow", color: "black"}} onClick={setYellow}>+1</button>
            <h3>Green moves = {move.green}</h3>
            <button style={{backgroundColor: "green"}} onClick={setGreen}>+1</button>
        </div>
    )
}