import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { TodoForm } from './features/todoForm/todoForm';
import { TodoList } from './features/todoList/TodoList.js';
import './App.css';
import axios from 'axios';
import { fetchImages, backgroundImages } from './app/data';
import { fetchBackgroundImages } from './api/apiCalls';

function App() {
  const [imagesArray, setImagesArray] = useState([])
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    fetchBackgroundImages(setImagesArray);
  }, [])
  
  const handleImageSwitch = (direction) => {
    if(direction === 'backward' && currentImage !== 0)
      return setCurrentImage(currentImage - 1)

    if(direction === 'forward' && currentImage !== 4)
      return setCurrentImage(currentImage + 1)
  }
  

  return (
    <div className="App" style={
      imagesArray.length > 0 
      ? {backgroundImage: `url(${imagesArray[currentImage].urls.full})`}
      : null
    }>
      <header className="App-header">
        <div className='todoWrapper'>
          <TodoForm />
          <TodoList />
        </div>
        <h1 className="App-logo">PROJECT1 TODO FORM</h1>
      </header>
      <div className='imageSwitcher'>
        <button onClick={() => {handleImageSwitch('backward')}} name='backward'>{'<<'}</button>
        <button onClick={() => {handleImageSwitch('forward')}} name='forward'>{'>>'}</button>
      </div>
    </div>
  );
}

export default App;
