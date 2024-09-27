import React, { useEffect, useState } from 'react';
import Create from './create';
import './home.css'
// import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
import axios from 'axios';

const HOME = () => {
  const [todos, newTodos] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/get')
      .then(response => {
        newTodos(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [])
  return (
    <>
      <div className='home'>
        <Create className='create'/>
        <div className='task-bar'>
        {
          todos.length === 0
            ?
            <div className='record'><h2>No Record Found</h2></div>
            :
            todos.map(todo =>
              <div className='task'>
                {/* <span><MdCheckBoxOutlineBlank className='icon' /></span> */}
                
                <p>{todo.task}</p>
                {/* <span><MdDelete /></span> */}
              </div>
            )
        }
        </div>
      </div>
    </>
  );
};

export default HOME;
