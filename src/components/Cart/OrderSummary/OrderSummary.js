import React, { Component } from 'react';

import axios from '../../../axios-instance';
import OrderList from './OrderList/OrderList';
import classes from './OrderSummary.module.scss';

class OrderSummary extends Component {
    state = {
        orderSummary: null
    }

    componentDidMount() {
        axios.get('/order.json')
            .then(response => {
                let data = Object.values(response.data.orderSummary);
                this.setState({orderSummary: data});
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() { 
        let subtotal = '';
        let orderList = '';
        const taxes = 12.12;
        if (this.state.orderSummary) {
            subtotal = this.state.orderSummary.reduce((acc, {price, quantity}) => {
                return acc + (price * quantity);
            }, 0);

            orderList = <OrderList 
                subtotal={subtotal}
                taxes={taxes}
                orderInfo={this.state.orderSummary} />;
        }

        return (
            <div className={classes.wrap}>
                <div className={classes.title}>
                    <h2>Order Summary</h2>
                    {/* <div className={classes.edit}>edit order</div> */}
                </div>
                {orderList}
                <span className={classes.terms}>
                    All purchases are subject to our Terms and Conditions
                </span>
            </div>
        );
    }
}
 
export default OrderSummary;
