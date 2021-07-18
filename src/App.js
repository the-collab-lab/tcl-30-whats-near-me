import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Map from './components/Map';
import List from './components/List';
import Settings from './components/Settings';
import Help from './components/Help';
import Nav from './components/Nav';
import WikiResults from './components/WikiResults';

import './App.css';

// make an api call to Wikipedia
// fetch locations
//     ----no locations? show error message
//     -----if there're locations, render them on the map  ()
//   make data available to other components

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
