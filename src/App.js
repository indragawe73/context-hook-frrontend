import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail';
import More from './pages/more';
import './App.css';

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/more/:page/:id" component={More} />
          <Route path="/detail/:id" component={Detail} exact />
        </Switch>
      </BrowserRouter>
  );
};

export default App;