import React, { Component } from 'react';

import OrderList from './OrderList/OrderList';
import classes from './OrderSummary.module.scss';

class OrderSummary extends Component {
    state = {
        order: [
            {
                id: 'jfdhfjdhf', 
                imageUrl: 'https://res.cloudinary.com/everlane/image/upload/c_scale/c_fill,dpr_2.0,f_auto,q_auto,w_auto:100:1200/v1/i/13301929_0368.jpg', 
                name: 'The Chelsea Boot', 
                color: 'Black', 
                quantity: '1',
                price: '235'
            },
            {
                id: 'oeioreirenren', 
                imageUrl: 'https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.0,f_jpg,h_1200,q_85,w_1200/v1/i/18d59f68_9d41.jpg', 
                name: 'The Twill Snap Backpack', 
                color: 'Reverse Denim + Brown Leather', 
                quantity: '1',
                price: '65'
            },
            {
                id: 'sndmsnjdshwg', 
                imageUrl: 'https://i.pinimg.com/474x/c9/98/b4/c998b444c27076dcd436648319f14a21.jpg', 
                name: 'The Twill Zip Tote', 
                color: 'Reverse Denim + Black Leather', 
                quantity: '1',
                price: '48'
            }
        ]
    }

    render() { 
        const subtotal = this.state.order.reduce((acc, {price, quantity}) => {
            return acc + (price * quantity);
        }, 0);

        const taxes = 12.12;

        return (
            <div className={classes.wrap}>
                <div className={classes.title}>
                    <h2>Order Summary</h2>
                    <div className={classes.edit}>edit order</div>
                </div>
                <OrderList 
                    subtotal={subtotal}
                    taxes={taxes}
                    orderInfo={this.state.order} />
                <span className={classes.terms}>
                    All purchases are subject to our <a>Terms and Conditions</a>
                </span>
            </div>
        );
    }
}
 
export default OrderSummary;
