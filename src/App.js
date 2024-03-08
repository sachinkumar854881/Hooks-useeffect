import React from 'react'
import {useState, useEffect} from 'react'
function App(){

    const [counter,setCounter] = useState(0)

    const [count, setCount] = useState(0)

    useEffect(()=>{
        alert('working...')
    },[counter])

    function incre(){
        setCounter(counter+1)
    }
    function increC(){
        setCount(count+1)
    }
    return(
        <center>
            <div>
                <h1>Welcome to useEffect🥇</h1>
                <h1>Counter: {counter}  Count: {count}</h1>
                <button onClick={incre}>Increase</button>
                <button onClick={increC}>increase</button>
            </div>
        </center>
    )
}
export default App;