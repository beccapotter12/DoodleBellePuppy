import React, { Component } from 'react';
// import axios from 'axios'
import { Route, Link } from 'react-router-dom'
// components

import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar3 from './components/ui/Navbar3'
import Home from './components/home'
// import Signup from './components/sign-up'
// import LoginForm from './components/login-form'
// import Navbar from './components/navbar'
import HomePage from './pages/home/Home';
import GuardianHome from './pages/guardian home/GuardianHome';
import Shop from './pages/shop/Shop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
  }


  render() {
    return (
      <div className="App">
      <Navbar3 />
<Route exact path="/" component={HomePage} />
{/* Once page, guardianhome is written, uncode line below: */}
<Route exact path="/guardianhome" component={GuardianHome} />
<Route exact path="/shop" component={Shop} />
      </div>
    );
  }

}
export default App;
