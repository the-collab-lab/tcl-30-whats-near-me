import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Map from './components/Map';
import List from './components/List';
import Help from './components/Help';
import Settings from './components/Settings';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Map} />
          <Route path="/list" component={List} />
          <Route path="/settings" component={Settings} />
          <Route path="/help" component={Help} />
        </Switch>
        <Nav />
      </div>
    </Router>
  );
};

export default App;
