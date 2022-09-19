import './App.css';
import { useState } from 'react';
import Boton from './Components/Boton';
import Contador from './Components/Contador';

function App() {

  const [numClick, setNumClick] = useState(0);

  const manejarClick = () => {
    setNumClick(numClick+1);
  }

  const reiniciarContador = () => {
    setNumClick(0);
  }

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1 className='titulo'>
          Contador de Click
        </h1>
        <Contador numclics={numClick} />
        <Boton
          text='Click'
          esBotonClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          text='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
