import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import ShippingInfo from './ShippingInfo/ShippingInfo';
import BillingInfo from './BillingInfo/BillingInfo';
import PaymentInfo from './PaymentInfo/PaymentInfo';
import OrderSummary from './OrderSummary/OrderSummary';
import classes from './Cart.module.scss';

class Cart extends Component {
    render() { 
        let routes = (
            <Switch>
              <Route path="/shipping" component={ShippingInfo} />
              <Route path="/billing" component={BillingInfo} />
              <Route path="/payment" component={PaymentInfo} />
              <Redirect to="/shipping" />
            </Switch>
        );
        return (
            <div className={classes.container}>
            
                <div className={classes.cart__wrap}>
                    <div className={classes.info}>
                        <Breadcrumbs />
                        {routes}
                    </div>
                    <OrderSummary />
                </div>
            </div>
        );
    }
}
 
export default Cart;
