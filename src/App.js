import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchResults from './context/SearchResults';
import List from './components/List';
import Settings from './components/Settings';
import Help from './components/Help';
import Nav from './components/Nav';
import Map from './components/Map';

import './App.css';

const App = () => {
  return (
    <SearchResults>
      <Router>
        <div className="app">
          <main className="app__content">
            <Switch>
              <Route path="/" exact component={Map} />
              <Route path="/list" component={List} />
              <Route path="/settings" component={Settings} />
              <Route path="/help" component={Help} />
            </Switch>
          </main>
          <Nav />
        </div>
      </Router>
    </SearchResults>
  );
};

export default App;
