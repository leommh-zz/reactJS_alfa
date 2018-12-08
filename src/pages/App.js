import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Artigo from '../components/Artigo';
import Contador from '../components/Contador';

class App extends Component {

  state = {
    artigos: [
      {
        nome: 'Batman',
        texto: 'Fique no chão!'
      },
      {
        nome: 'Batman2',
        texto: 'Fique no chão!'
      },
    ],
    tempo: 500
  }

  render() {

    const { artigos, tempo } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Contador tempo={tempo} numero={200} />
          <h1>BATTOP</h1>
          {
            artigos.map(
              artigo => (
                <Artigo 
                  nome={artigo.nome} 
                  texto={artigo.texto} 
                />
              )
            )
          }
          
        </header>
      </div>
    );
  }
}

export default App;
