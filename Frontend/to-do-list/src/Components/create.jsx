import React, { useState } from 'react'
import axios from 'axios'
import './create.css'
import { IoIosAddCircle } from "react-icons/io";


const create = () => {
    const [task,setTask] =useState();
    const taskAdded = ()=>{
        axios.post('http://localhost:3000/add',{task:task})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }
  return (
    <>
    <div className="addtask">
      <h1>ADD TASK</h1>
        <input type="text" placeholder='Enter Task' onChange={(e)=> setTask(e.target.value)}/>
        <button onClick={taskAdded}>Add Task</button>
        <IoIosAddCircle className='iconn'/>

        
    </div>
    </>
  )
}

export default create
