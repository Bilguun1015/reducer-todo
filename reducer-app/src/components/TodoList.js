import React, { useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers/todoReducer';
import AddTodo from './AddTodo'
import Todo from './ToDo'


const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state)

    return(
        <>  
            
            {!state.completed ? (
                <div>
                    <h1>Make A List</h1>
                    <AddTodo add={item => dispatch({type: "ADD", item:item})}/>
                    {state.todos.map(list => (
                        <Todo key={list.id} todo={list} remove={()=> dispatch({type:'REMOVE', id: list.id})} complete={()=> dispatch({type:'COMPLETE', id: list.id})}/>
                    ))}
                </div>
            ) : (
                <div>
                    <h1>Completed</h1>
               </div>
            )}
            
            
        </>
    )
}

export default TodoList;