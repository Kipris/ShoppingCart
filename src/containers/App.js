import React, { Component } from 'react';

import Navigation from '../components/Navigation/Navigation';
import Cart from '../components/Cart/Cart';
import classes from './App.module.scss';

class App extends Component {
  state = {
    productsAmount: 3
  }

  render() { 
    return (
      <>
        <Navigation 
          amount={this.state.productsAmount} />
        <Cart />
      </>
    );
  }
}
 
export default App;