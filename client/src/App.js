import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import axios from 'axios'
// import { Route, Link } from 'react-router-dom'
// components

// import Signup from './components/sign-up'
// import LoginForm from './components/login-form'
import Navbar3 from './components/ui/Navbar3'
// import Loading from "./components/ui/Loading";
// import { useAuth0 } from "./react-auth0-spa";

// import BestSeller from './components/product/BestSeller'
// import Home from './components/home'
// // import Signup from './components/sign-up'
// import LoginForm from './components/login-form'
// import Navbar from './components/navbar'
import HomePage from './pages/home/Home.js';
// // import GuardianHome from './pages/guardian home/GuardianHome';
// import Shop from './pages/shop/Shop';

const App = () => {
  // const { loading } = useAuth0();

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <Router>
        <>
        <Navbar3 />
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* // <Route path="/buddies" exact component={Buddies} />
          // <PrivateRoute path="/buddy-profile/" component={BuddyProfile} />
          // <PrivateRoute path="/dashboard" component={Dashboard} />
          // <PrivateRoute path="/profile" component={Profile} />
          // <PrivateRoute path="/goals" component={Goals} /> */}
        </Switch>
        </>
        </Router>
  )
        }; 

export default App;
