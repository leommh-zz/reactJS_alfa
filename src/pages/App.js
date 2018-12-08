import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Artigo from '../components/Artigo';
import Contador from '../components/Contador';
import { Container, Alert, Button } from 'reactstrap';

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
      <Container>

        <div className="App">
          
          <header className="App-header">
            <Contador tempo={tempo} numero={200} />
            <h1>BATTOP</h1>
            <Alert color="warning">
              Alert Example
            </Alert>
            <Button color="info">
              Button Example
            </Button>
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
      </Container>
    );
  }
}

export default App;
