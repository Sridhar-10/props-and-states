import React from 'react'


var style1={
    height: '100px',
    width:'35%',
    margin:'auto',
    borderRadius: '20px',
    marginBottom: '15px',
    display:'flex',
    justifyContent:'space-between',
}

const TodoItem = () => {
  return (
    <>
        <h1>TodoItem</h1>
        <div style={style1}>
            <h1>Learn React</h1>
            <input type="checkbox" style={{height: '60%',width:'40%',margin:'auto'}}/>
        </div>
        <div style={style1}>
            <h1>Learn Lists</h1>
            <input type="checkbox" style={{height: '60%',width:'40%',margin:'auto'}}/>            
        </div>
        <div style={style1}>
            <h1>Learn State </h1>
            <input type="checkbox" style={{height: '60%',width:'40%',margin:'auto'}}/>
        </div>
        <div style={style1}>
            <h1>Write Notes</h1>
            <input type="checkbox" style={{height: '60%',width:'30%',margin:'auto'}}/>
        </div>
    </>
  )
}

export default TodoItem