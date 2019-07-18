import React from 'react';
import { Route } from 'react-router-dom';
import Pokeshop from './components/Pokeshop';
// import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  return (
    <div className="App text-color">
      <h1> Team Rocket: Pokemon Shop! </h1>
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/shop" exact component={Pokeshop} />
      {/* <Route path="/shopping-cart" component={ShoppingCart} /> */}

    </div>
  );
}

export default App;
