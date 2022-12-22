import { createSlice } from '@reduxjs/toolkit';

const todoFormSlice = createSlice({
    name: 'todoForm',
    initialState: {
        todoInput: ''
    },
    reducers: {
        updateTodoInput: (state, action) => {
            state.todoInput = action.payload;
        }
    }
})

export default todoFormSlice.reducer;
export const { updateTodoInput } = todoFormSlice.actions;
export const selectTodoInput = state => state.todoForm.todoInput;