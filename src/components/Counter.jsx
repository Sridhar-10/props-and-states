import React,{useState} from 'react'

const Counter = () => {

    const [count,setCount]=useState(0)
  return (
   <>
      <h1 style={count%2===0?{color:'green'}:{color:'red'}}>Counter:{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Inctrement</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      <button onClick={()=>{setCount(count*2)}}>Double</button>
   </>
  )
}

export default Counter