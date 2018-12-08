import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SobrePage from './pages/SobrePage';
import HomePage from './pages/HomePage';
import TarefasPage from './pages/TarefasPage';

const Routes = props => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={HomePage} />
            <Route path="/tarefas/" component={TarefasPage} />
            <Route path="/sobre/" component={SobrePage} />
        </BrowserRouter>
    )
}

export default Routes;