import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import List from './components/List';
import Settings from './components/Settings';
import Help from './components/Help';
import Nav from './components/Nav';
import WikiResults from './components/WikiResults';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <main>
          <Switch>
            <Route path="/" exact component={WikiResults} />
            <Route path="/list" component={List} />
            <Route path="/settings" component={Settings} />
            <Route path="/help" component={Help} />
          </Switch>
        </main>
        <Nav />
      </div>
    </Router>
  );
};

export default App;
