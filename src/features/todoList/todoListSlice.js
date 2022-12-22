import  { createSlice } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        todos: ['test', 'works'],
        completedTodos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            const newList = state.todos.filter(todo => todo !== action.payload);
            state.todos = newList;
        },
        completeTodo: (state, action) => {
            state.completedTodos.push(action.payload);
        }
    }
})

export default todoListSlice.reducer;
export const { addTodo, completeTodo, removeTodo } = todoListSlice.actions;
export const selectAllTodos = state => state.todoList.todos;
export const selectCompletedTodos = state => state.todoList.completedTodos;