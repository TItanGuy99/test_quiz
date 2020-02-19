import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Introducao from './Component/Introducao';
import Instrucao from './Component/Instrucao';
import Game from './Component/Game';
import Result from './Component/Result';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Introducao}  />
          <Route path="/Instrucao" component={Instrucao}  />
          <Route path="/Game" component={Game}  />
          <Route path="/Result" component={Result}  />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
