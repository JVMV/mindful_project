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

    if(direction === 'forward' && currentImage !== imagesArray.length - 1)
      return setCurrentImage(currentImage + 1)
  }

  return (
    <body className="App" style={
      imagesArray.length > 0
      ? {backgroundImage: `url(${imagesArray[currentImage].urls.full})`}
      : null
    }>
      <header className="App-header">
        {/* <h1 className="App-logo">PROJECT1 TODO FORM</h1> */}
        <section className='weather'>
          <Weather weather={weather} />
        </section>
        <section className='todoWrapper'>
          <TodoForm />
        </section>
        <section id='todoListWrapper' className='todoWrapper'>
          <TodoList />
        </section>
      </header>
      <section className='quote'>
        <Quote fetchedQuote={quote} />
      </section>
      <div className='imageSwitcher'>
        <button onClick={() => {handleImageSwitch('backward')}} name='backward'>{'<<'}</button>
        <button onClick={() => {handleImageSwitch('forward')}} name='forward'>{'>>'}</button>
      </div>
    </body>
  );
}

export default App;
