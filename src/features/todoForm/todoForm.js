import React from 'react';
import { selectTodoInput, updateTodoInput } from './todoFormSlice';
import { addTodo } from '../todoList/todoListSlice';
import { useSelector, useDispatch } from 'react-redux';
import './todoForm.module.css';

export function TodoForm() {
    const todoInput = useSelector(selectTodoInput);
    const dispatch = useDispatch();
    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch(addTodo(todoInput));
        dispatch(updateTodoInput(''))
    }
    const handleTodoChange = e => {
        dispatch(updateTodoInput(e.target.value));
    }

    return (
        <div>
            <form id='todoForm' className='todoForm' onSubmit={handleFormSubmit}>
                <label htmlFor='todoInput' >Add a todo</label>
                <input 
                    name='todoInput' 
                    id='todoInput'
                    value={todoInput}
                    onChange={handleTodoChange}
                    placeholder='type in a new todo'
                /> 
                <button>Add Todo</button> 
            </form>
        </div>
    )
}