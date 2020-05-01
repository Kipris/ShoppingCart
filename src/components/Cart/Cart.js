import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import ShippingInfo from './ShippingInfo/ShippingInfo';
import OrderSummary from './OrderSummary/OrderSummary';
import classes from './Cart.module.scss';

class Cart extends Component {
    state = {  }

    render() { 
        let routes = (
            <Switch>
              {/* <Route path="/shipping" component={Cart} />
              <Route path="/shipping" component={asyncShipping} />
              <Route path="/billing" component={asyncBilling} />
              <Route path="/payment" component={asyncPayment} /> */}
            </Switch>
        );
        return (
            <div className={classes.container}>
            {routes}
                <div className={classes.cart__wrap}>
                    <div className={classes.info}>
                        <Breadcrumbs />
                        <ShippingInfo />
                    </div>
                    <OrderSummary />
                </div>
            </div>
        );
    }
}
 
export default Cart;
