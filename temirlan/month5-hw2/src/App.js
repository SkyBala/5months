import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const [inpValue, setInpValue] = useState("");
    const value = useSelector(state => state)

    const dispatch = useDispatch()

    const calculate = (e) => {
        switch (e.target.innerText) {
            case "+":
                return dispatch({type: "PLUS", payload: Number(inpValue)})
            case "-":
                return dispatch({type: "MINUS", payload: Number(inpValue)})
            case "*":
                return dispatch({type: "MULTIPLY", payload: Number(inpValue)})
            case "/":
                return dispatch({type: "DIVIDE", payload: Number(inpValue)})
            default:
                break;
        }
    }

    return (
        <div className="App">
            <div>
                <input value={inpValue} onChange={(e) => setInpValue(e.target.value)} type="number"/>
                <button onClick={() => {
                    dispatch({type: "CLEAR"})
                }}>clear
                </button>
            </div>
            <button onClick={(e) => calculate(e)}>+</button>
            <button onClick={(e) => calculate(e)}>-</button>
            <button onClick={(e) => calculate(e)}>*</button>
            <button onClick={(e) => calculate(e)}>/</button>
            <ul>
                {value.list.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
        </div>
    );
}

export default App;