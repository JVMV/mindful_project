import React from 'react';
import { selectAllTodos, selectCompletedTodos } from '../todoList/todoListSlice';
import { useSelector } from 'react-redux';
import './TodoList.css';

export function TodoList() {
    const todos = useSelector(selectAllTodos);
    const completedTodos = useSelector(selectCompletedTodos);

    const handleClick = e => {
        if(!e.target.classList.contains('completed'))
            return e.target.classList.add('completed');

        if(e.target.classList.contains('completed'))
            return e.target.classList.remove('completed');
    }

    return (
        <div className='todoList'>
            {/* <h2>Todos</h2> */}
            {
            todos.length > 0 
            ? todos.map(todo => <div  onClick={handleClick} className='todoBox' key={Math.floor(Math.random() * 1000)}>{todo}</div>)
            : <div className='emptyList' key={Math.floor(Math.random() * 1000)}>Add a task and they will show up here</div>
        }
        </div>
    )
}

// {todos.map(todo => {
//     return (
//         <div className='todoBox' key={Math.floor(Math.random() * 1000)}>{todo}</div>
//     )
// })
// }