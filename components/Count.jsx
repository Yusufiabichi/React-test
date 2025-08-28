import { useState } from 'react'


const Count = () => {
    const [count, setCount] = useState(0);
    const addCount = () => {
        setCount(count+1);
    }
    const subCount = () => {
        setCount(count-1);
    }
    const resetCount = () => {
        setCount(0);
    }
    return (
        <div>
            <h1>Count is: {count}</h1>
            <button onClick={subCount}>Click to Sub 1</button>
            <button onClick={()=> resetCount()}>Reset</button>
            <button onClick={()=> addCount()}>Click to Add 1</button>
        </div>
    );
}

export default Count