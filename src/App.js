import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ButtonIncrement from './ButtonIncrement';

function App() {

  const [number, setNumber] = useState(0);

  const getNumber = (number) => {

    setNumber(number)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {number}
      <ButtonIncrement callback={getNumber} number={number}/>
      </header>
    </div>
  );
}

export default App;
