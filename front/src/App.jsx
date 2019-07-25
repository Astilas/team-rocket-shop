import React from 'react';
import { Route } from 'react-router-dom';
import Pokeshop from './components/Pokeshop';
// import NavBar from './components/NavBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';

// import ShoppingCart from './components/ShoppingCart';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token') || '';
    this.state = {
      token,
    };
    this.setToken = this.setToken.bind(this);
  }


  setToken(token) {
    this.setState({ token });
  }

  render() {
    const { token } = this.state;
    return (
      <div className="App text-color">
        <h1> Team Rocket: Pokemon Shop! </h1>
        {
          token
            ? ''
            : (
              <Route
                path="/signin"
                exact
                render={props => (
                  <SignIn
                    {...props}
                    setToken={this.setToken}
                  />
                )}
              />
            )
        }
        {/* <Route path="/signin" exact render={props => <SignIn {...props} setToken={this.setToken} />} /> */}
        <Route path="/signup" exact component={SignUp} />
        <Route path="/shop" exact render={props => <Pokeshop {...props} setToken={this.setToken} />} />
        <Route path="/shopping-cart" component={SignUp} />
        {/* <NavBar token={token} /> */}

      </div>
    );
  }
}

export default App;
