import React from 'react';
import './components/button.css';
import './App.css';
import Button from './components/Button';

function App() {
  const [contador, setContador] = React.useState(1);

  function aumentar(){
    console.log("Entra a la función aumentar");
    setContador(contador + 1);
  }

  return (
    <div className="App">
      <p>Hello World {contador}</p>
      <Button label="Incrementar" onClick={()=>aumentar()}></Button>
      <Button label="Incrementar 2" color='green' onClick={()=>aumentar()}></Button>
      <Button label="Incrementar 4" color='red' onClick={()=>aumentar()}></Button>

      <div className="btn-container">
          
          <div className='screen'>
            <p>Screen</p>
          </div>
          <div className='teclado'>
            <p>Stats</p>
            
          </div>
          <div className='grid-container'>
            <Button label="1" onClick={()=>aumentar()}></Button>
            <Button label="2" onClick={()=>aumentar()}></Button>
            <Button label="3" onClick={()=>aumentar()}></Button>
            <Button label="4" onClick={()=>aumentar()}></Button>
            <Button label="5" onClick={()=>aumentar()}></Button>
            <Button label="6" onClick={()=>aumentar()}></Button>
            <Button label="7" onClick={()=>aumentar()}></Button>
            <Button label="8" onClick={()=>aumentar()}></Button>
            <Button label="9" onClick={()=>aumentar()}></Button>
            <Button label="<-" onClick={()=>aumentar()}></Button>
            <Button label="9" onClick={()=>aumentar()}></Button>
            <Button label="°" onClick={()=>aumentar()}></Button>
            </div>
      </div>

    </div>
    
  );
}

export default App;