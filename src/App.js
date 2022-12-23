import React, { useEffect, useState } from 'react';
import { TodoForm } from './features/todoForm/todoForm';
import { TodoList } from './features/todoList/TodoList.js';
import './App.css';
import { fetchBackgroundImages, fetchWeather, fetchQuote } from './api/apiCalls';
import { Weather } from './features/fetchWeather/Weather';
import { Quote } from './features/fetchQuote/Quote';

function App() {
  const [imagesArray, setImagesArray] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [weather, setWeather] = useState(null);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchBackgroundImages(setImagesArray);
    fetchWeather(setWeather);
    fetchQuote(setQuote);
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
        <div className='weather'>
          <Weather weather={weather} />
        </div>
        <div className='todoWrapper'>
          <TodoForm />
          <TodoList />
        </div>
        <h1 className="App-logo">PROJECT1 TODO FORM</h1>
      </header>
      <div className='quote'>
        <Quote fetchedQuote={quote} />
      </div>
      <div className='imageSwitcher'>
        <button onClick={() => {handleImageSwitch('backward')}} name='backward'>{'<<'}</button>
        <button onClick={() => {handleImageSwitch('forward')}} name='forward'>{'>>'}</button>
      </div>
    </div>
  );
}

export default App;
