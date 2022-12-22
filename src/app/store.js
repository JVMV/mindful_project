import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoFormReducer from '../features/todoForm/todoFormSlice';
import todoListReducer from '../features/todoList/todoListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoForm: todoFormReducer,
    todoList: todoListReducer,
  },
});
