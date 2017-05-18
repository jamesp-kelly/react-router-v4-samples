import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  NavLink
} from 'react-router-dom';
import './App.css';

const isActiveFunc = (match, location) => {
  console.log(match, location);
  return match;
}

const Links = () => (
  <nav>
    <NavLink 
      exact 
      to="/"
      activeClassName="activeLink"
    >
      Home
    </NavLink>
    {' '}
    <NavLink 
      activeStyle={{'color': 'green'}} 
      to={{pathname: '/about'}}
    >
      About
    </NavLink>
    {' '}
    <NavLink 
      isActive={isActiveFunc} 
      activeClassName="activeLink" 
      to="/contact"
    >
      Contact
    </NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route exact path="/about" render={() => <h1>About</h1>} />
      <Route exact path="/contact" render={() => <h1>Contact</h1>} />
    </div>
  </Router>
);

export default App;