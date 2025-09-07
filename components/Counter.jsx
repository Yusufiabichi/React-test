import { useState } from 'react'


const Counter = () => {
    const [counter, setCounter] = useState(0);
    const addCount = () => {
        setCounter(count+1);
    }

    const checkCount = () => {
        if(counter=== 0){
            alert("You've reached the limit");
        }
        else if(counter >=1){
            setCount(counter-1);
        }
    }
    const subCount = () => {
        checkCount()
    }
    const resetCount = () => {
        setCounter(0);
    }
    return (
        <div className='count-box'>
            <h1>Count is: {counter}</h1>
            <button onClick={subCount}>Decrease</button>
            <button onClick={()=> resetCount()}>Reset</button>
            <button onClick={()=> addCount()}>Increase</button>
        </div>
    );
}

export default Counter