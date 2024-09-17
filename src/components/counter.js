import {useState} from "react";


const Counter = () => {
    
    let [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter+1);
    };

        const decreaseCounter = () => {
            setCounter(counter-1);
    };
    return (

        <div>
        counter: {counter}
        <button onClick = {increaseCounter}>+</button>
        <button onClick = {decreaseCounter}>-</button>

        </div>
    );
}

export default Counter;