import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleReset = () => {
        dispatch(reset())
        setAmount(0);
    }

    const handleIncrementByAmount = () => {
        const incrementAmount = Number(amount) || 0;
        dispatch(incrementByAmount(incrementAmount))
    }

    return (
        <div>
            <h1>Count total: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
            <div>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button onClick={handleIncrementByAmount}>Increase by Amount</button>
            </div>
        </div>
    )
}

export default Counter