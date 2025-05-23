import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import TextBox from './components/TextBox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TextBox text="Welcome to The World of Tee — where code becomes story." />
    </div>
  );
}

export default App;
