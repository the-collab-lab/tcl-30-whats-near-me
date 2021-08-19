import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GoogleMaps from './context/GoogleMapsContext';
import MapCenter from './context/MapCenterContext';
import Locations from './context/LocationsContext';
import ListPage from './pages/ListPage';
import Settings from './components/Settings';
import Help from './components/Help';
import Footer from './components/Footer';
import MapPage from './pages/MapPage';

import './App.css';

const App = () => {
  return (
    <GoogleMaps>
      <MapCenter>
        <Locations>
          <Router>
            <div className="app">
              <main className="app__content">
                <Switch>
                  <Route path="/" exact component={MapPage} />
                  <Route path="/list" component={ListPage} />
                  <Route path="/settings" component={Settings} />
                  <Route path="/help" component={Help} />
                </Switch>
              </main>
              <Footer />
            </div>
          </Router>
        </Locations>
      </MapCenter>
    </GoogleMaps>
  );
};

export default App;
