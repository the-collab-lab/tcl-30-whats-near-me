import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MapCenter from './context/MapCenterContext';
import List from './components/List';
import Settings from './components/Settings';
import Help from './components/Help';
import Nav from './components/Nav';
import MapPage from './components/MapPage';

import './App.css';
import Locations from './context/LocationsContext';

const App = () => {
  return (
    <MapCenter>
      <Locations>
        <Router>
          <div className="app">
            <main className="app__content">
              <Switch>
                <Route path="/" exact component={MapPage} />
                <Route path="/list" component={List} />
                <Route path="/settings" component={Settings} />
                <Route path="/help" component={Help} />
              </Switch>
            </main>
            <Nav />
          </div>
        </Router>
      </Locations>
    </MapCenter>
  );
};

export default App;
