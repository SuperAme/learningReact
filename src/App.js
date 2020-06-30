import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MiComponente from './components/MiComponente';

function App() {
  var nombre = "AMQ";
  var presentacion = <h2>Hola, yo soy {nombre}</h2>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Américo
        </p>
        {
          presentacion
        }
        <section className="componentes">
          <MiComponente/>
        </section>
      </header>
      
    </div>
  );
}

export default App;
