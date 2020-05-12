import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function randomColor() {
  var c = '#';
  for (var i = 0; i < 6; i++) {
    c += ((Math.random() * 16) | 0).toString(16);
  }
  return c;
}
function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: color }}>Need a change?</h1>
        {color}
        <button
          onClick={function onClick() {
            setColor(randomColor());
          }}
        >
          click here!
        </button>
      </header>
    </div>
  );
}

//a.color = randomColor();
export default App;
