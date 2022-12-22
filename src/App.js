import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { TodoForm } from './features/todoForm/todoForm';
import { TodoList } from './features/todoList/TodoList.js';
import './App.css';
import axios from 'axios';
import { fetchImages, backgroundImages } from './app/data';

function App() {
  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     baseURL: 'https://api.unsplash.com',
  //     url: '/photos/random',
  //     headers: {
  //       Authorization: 'Client-ID HGoZgqrRarcGJdxcrfbTVXQNXb7XgxBx1GPBdD2W-Eg'
  //     },
  //     params: {
  //       orientation: 'landscape',
  //       count: 5
  //     }
  //   }).then(res => {
  //     const fetchedImages = res.data;
  //     fetchImages(fetchedImages);
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }, [])
  
  

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm />
        <TodoList />
        <h1 className="App-logo">PROJECT1 TODO FORM</h1>
      </header>
    </div>
  );
}

export default App;
