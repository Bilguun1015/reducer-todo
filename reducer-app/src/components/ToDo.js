
import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';

const Todo = ({ todo, remove, complete }) => {
  return (
    <>
        <span >{todo.item}</span>
        <button  onClick={complete}>Completed</button>
        <button className="RemoveTodo" onClick={remove}>Remove</button>
    </>
            
  );
}

export default Todo;