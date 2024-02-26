import React, { useState } from 'react';
import './App.css';

import Button from './components/Button';
import DisplayField from './components/DisplayField';
import './components/pokeball.css';

import './components/button.css';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [isSecondScreenVisible, setSecondScreenToggle] = useState(false);

  const handleClick = (buttonValue: string) => {
    if (displayValue.length < 3) {
      setDisplayValue(displayValue + buttonValue);
    }
  };

  const handleErase = () => {
    setDisplayValue('');
  };

  const handlePokeClick = () => {
    setSecondScreenToggle(!isSecondScreenVisible);
  };

  return (
    <div className="App">
      <div className='pokedex-wrapper'>
        <div className='bigger-pokedex-container'>
          <div className="pokedex-container">
            <div className='pokedex-content'>
              <button className="pokeball" onClick={handlePokeClick}>
                  <div className='pokeball__button'></div>
                  <div className='pokeball__button'></div>
              </button>
              <div className='screen'></div>
              <div>
                <DisplayField value={displayValue}></DisplayField>
              </div>
              <div className='grid-container'>
                <Button label="1" onClick={() => handleClick('1')}></Button>
                <Button label="2" onClick={() => handleClick('2')}></Button>
                <Button label="3" onClick={() => handleClick('3')}></Button>
                <Button label="4" onClick={() => handleClick('4')}></Button>
                <Button label="5" onClick={() => handleClick('5')}></Button>
                <Button label="6" onClick={() => handleClick('6')}></Button>
                <Button label="7" onClick={() => handleClick('7')}></Button>
                <Button label="8" onClick={() => handleClick('8')}></Button>
                <Button label="9" onClick={() => handleClick('9')}></Button>
                <Button label="0" onClick={() => handleClick('0')}></Button>
                <Button label="Clear" onClick={handleErase}></Button>
                <Button label="Enter" onClick={handleErase}></Button>
              </div>
            </div>
          </div>
        </div>
        {isSecondScreenVisible && (
          <div className='bigger-pokedex-container'>
            <div className="pokedex-container">
              <div className='pokedex-content'>
                <div className='screen-big'></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;