import React from 'react';
import { selectTodoInput, updateTodoInput } from './todoFormSlice';
import { addTodo } from '../todoList/todoListSlice';
import { useSelector, useDispatch } from 'react-redux';

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
            <p>todoForm</p>
            <form onSubmit={handleFormSubmit}>
                <input 
                    name='todoInput' 
                    value={todoInput}
                    onChange={handleTodoChange}
                    placeholder='type in a new todo'
                /> 
                <button>Add Todo</button> 
            </form>
        </div>
    )
}