import React from 'react';
import { selectAllTodos, selectCompletedTodos } from '../todoList/todoListSlice';
import { useSelector } from 'react-redux';

export function TodoList() {
    const todos = useSelector(selectAllTodos);
    const completedTodos = useSelector(selectCompletedTodos);

    return (
        <div className='todoList'>
            <p>This will be the todo list. It will map all the Todos in the store</p>
            {todos.map(todo => {
                return (
                    <div className='todoBox' key={Math.floor(Math.random() * 1000)}>{todo}</div>
                )
            })}
        </div>
    )
}