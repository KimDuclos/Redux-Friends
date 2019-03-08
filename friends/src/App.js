import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

import Home from './views/Home';
import Login from './views/Login';
import Friends from './views/Friends';
import LoginRoute from './components/LoginRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/login">Sign In</NavLink>
          </nav>
          <h1>Friends App</h1>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <LoginRoute exact path="/friends" component={Friends} />
        </div>
      </Router>
    );
  }
}

export default App;