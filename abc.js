import './App.css';
import React, { useState } from 'react';
import Container from './components/Container';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState('');

  const getJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(`${response.data.setup}...${response.data.punchline}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        Hello <button onClick={getJoke}>Get Joke</button>
        {joke}
        <Container />
      </div>
    </>
  );
}

export default App;
