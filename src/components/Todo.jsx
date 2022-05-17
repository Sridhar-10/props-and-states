import React,{useState} from 'react'

const Todo = () => {

    let [value,setValue]=useState("");
    const [todos,setTodos]=useState([])
 
  return (
   <>
       <h1>Todo</h1>
       <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
       <button onClick={()=>{
           setTodos([...todos,{id:Date.now(),value: value}]);
           setValue("");
       }}>Add</button>
       {todos.map((todo)=>(
           <div key={todo.id}>{todo.value}</div>
       ))}

   </>
  )
}

export default Todo