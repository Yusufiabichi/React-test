import { useState } from 'react'


const Count = () => {
    const [count, setCount] = useState(0);
    const addCount = () => {
        setCount(count+1);
    }

    const checkCount = () => {
        if(count=== 0){
            alert("Cannot subtract from 0");
        }
        else if(count >=1){
            setCount(count-1);
        }
    }
    const subCount = () => {
        checkCount()
    }
    const resetCount = () => {
        setCount(0);
    }
    return (
        <div className='count-box'>
            <h1>Count is: {count}</h1>
            <button onClick={subCount}>Decrease</button>
            <button onClick={()=> resetCount()}>Reset</button>
            <button onClick={()=> addCount()}>Increase</button>
        </div>
    );
}

export default Count