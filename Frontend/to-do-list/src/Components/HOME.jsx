import React, { useEffect, useState } from 'react';
import Create from './create';
import './home.css'
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
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
  }, []);

  const handleEdit = (id) => {
    axios.put(`http://localhost:3000/update/${id}`)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };


  return (
    <>
      <div className='home'>
        <Create className='create' />
        <div className='task-bar'>
          {
            todos.length === 0
              ?
              <div className='record'><h2>No Record Found</h2></div>
              :
              todos.map(todo =>
                <div className='task' onClick={() => handlEdit(todo._id)}>
                  {
                    todo.done === true ?
                      <FaRegCheckSquare />
                      :
                      <span><MdCheckBoxOutlineBlank className='icon' /></span>
                  }

                  <p>{todo.task}</p>
                  <span><MdDelete className='icon' /></span>
                </div>
              )
          }
        </div>
      </div>
    </>
  );
};

export default HOME;
