import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';
import ShippingInfo from '../../components/Cart/ShippingInfo/ShippingInfo';
// import BillingInfo from '../../components/Cart/BillingInfo/BillingInfo';
// import PaymentInfo from '../../components/Cart/PaymentInfo/PaymentInfo';
// import SuccessOrder from '../../components/Cart/SuccessOrder/SuccessOrder';
import OrderSummary from '../../components/Cart/OrderSummary/OrderSummary';
import * as actions from '../../store/actions/index';
import classes from './Cart.module.scss';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncBillingInfo = asyncComponent(() => {
    return import ('../../components/Cart/BillingInfo/BillingInfo');
})

const AsyncPaymentInfo = asyncComponent(() => {
    return import ('../../components/Cart/PaymentInfo/PaymentInfo');
})

const AsyncSuccessOrder = asyncComponent(() => {
    return import ('../../components/Cart/SuccessOrder/SuccessOrder');
})

class Cart extends Component {

    render() { 
        let routes = (
            <Switch>
                <Route 
                    path="/shipping" 
                    component={() => <ShippingInfo 
                                        onAddShippingInfo={this.props.onAddShippingInfo} />} />
                
                { this.props.orderInfo.order.shippingInfo
                ? <Route 
                    path="/billing" 
                    component={() => <AsyncBillingInfo 
                                        shippingInfo={this.props.orderInfo.order.shippingInfo} 
                                        onAddBillingInfo={this.props.onAddBillingInfo} />} /> 
                : null }

                { this.props.orderInfo.order.billingInfo
                ? <Route 
                    path="/payment" 
                    component={() => <AsyncPaymentInfo 
                                        onAddPaymentInfo={this.props.onAddPaymentInfo} 
                                        onMakeOrder={this.props.onMakeOrder}
                                        orderData={this.props.orderInfo.order} />} />
                : null }
                
                { this.props.orderInfo.order.paymentInfo
                ? <Route 
                    path="/success-order" 
                    component={() => <AsyncSuccessOrder 
                                        customerEmail={this.props.orderInfo.order.shippingInfo.email} />} />
                : null }    
                
                <Redirect to="/shipping" />
            </Switch>
        );
        return (
            <div className={classes.container}>
                <div className={classes.wrap}>
                    <div className={classes.info}>
                        <Breadcrumbs orderInfo={this.props.orderInfo} />
                        {routes}
                    </div>
                    <OrderSummary isOrdered={this.props.orderInfo.isOrdered} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orderInfo: state.orderInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddShippingInfo: (shippingInfo) => dispatch(actions.addShippingInfo(shippingInfo)),
        onAddBillingInfo: (billingInfo) => dispatch(actions.addBillingInfo(billingInfo)),
        onAddPaymentInfo: (formData) => dispatch(actions.addPaymentInfo(formData)),
        onMakeOrder: (orderData) => dispatch(actions.makeOrder(orderData))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
