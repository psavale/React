import React, { useState } from 'react';

function HookCounterTwo() {
    const initialState = 0
    const [count, setCount] = useState(initialState)

    const IncrementCount = () => {
        for (let index = 0; index < 5; index++) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(initialState)}>reset</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={IncrementCount}>increment count by 5</button>

        </div>
    );
}

export default HookCounterTwo;