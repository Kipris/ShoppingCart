import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from '../components/Navigation/Navigation';
import Cart from './Cart/Cart';

class App extends Component {
  render() { 
    let cartAmount = '';
    if (this.props.orderSummary) {
      cartAmount = Object.keys(this.props.orderSummary).length;
    }
    return (
      <>
        <Navigation 
          amount={cartAmount} />
        <Cart />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderSummary: state.orderInfo.order.orderSummary
  }
}
 
export default connect(mapStateToProps)(App);
