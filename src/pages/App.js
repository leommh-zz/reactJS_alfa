import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container} from 'reactstrap';
import { HashRouter, Link, Route } from 'react-router-dom';

import SobrePage from './SobrePage';
import TarefasPage from './TarefasPage';
import HomePage from './HomePage';

class App extends Component {

  render() {

    return (
      <HashRouter>
        <Container>
          <ul>
            <li><Link exact to="/">Home</Link></li>
            <li><Link to="/Tarefas">Tarefas</Link></li>
            <li><Link to="/Sobre">Sobre</Link></li>
          </ul>

          <Route path="/" exact component={HomePage} />
          <Route path="/tarefas/" component={TarefasPage} />
          <Route path="/sobre/" component={SobrePage} />
        </Container>
      </HashRouter>
    );
  }
}

export default App;
