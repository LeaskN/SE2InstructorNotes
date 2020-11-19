import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="overlay"></div>
      <div className="homeBackground"></div>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/Portfolio" component={Portfolio} /> 
            {/* <Route />
            <Route />
            <Route /> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
