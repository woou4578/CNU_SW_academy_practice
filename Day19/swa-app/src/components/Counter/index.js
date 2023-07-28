import { useState } from "react";
import propTypes from "prop-types";

function Counter({ onIncrease, onDecrease }) {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count+1);
        if(onIncrease) {
            onIncrease(count+1);
        }
    };
    
    const handleDecrease = () => {
        setCount(count-1);
        if(onDecrease) {
            onDecrease(count-1);
        }
    };
    
    return (
        <div>
            <span style={{fontSize: 30}}>{count}</span>
            <br/>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}

Counter.propTypes = {
    onIncrease: propTypes.func,
    onDecrease: propTypes.func
}

export default Counter;