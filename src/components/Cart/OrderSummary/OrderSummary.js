import React, { Component } from 'react';

import classes from './OrderSummary.module.scss';

class OrderSummary extends Component {
    state = {
        order: [
            {
                id: 'jfdhfjdhf', 
                imageUrl: require('../../../assets/img/boots.jpg'), 
                name: 'The Chelsea Boot', 
                color: 'Black', 
                quantity: '1',
                price: '235'
            },
            {
                id: 'oeioreirenren', 
                imageUrl: require('../../../assets/img/backpack.jpg'), 
                name: 'The Twill Snap Backpack', 
                color: 'Reverse Denim + Brown Leather', 
                quantity: '1',
                price: '65'
            },
            {
                id: 'sndmsnjdshwg', 
                imageUrl: require('../../../assets/img/bag.jpg'), 
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
                <ul className={classes.order}>
                    <li>
                        <span className={classes.order__image}>
                            <img src={this.state.order[0].imageUrl} />
                        </span>
                        <span className={classes.order__item}>
                            <span className={classes.order__itemname}>{this.state.order[0].name}</span>
                            <span className={classes.order__itemcolor}>{this.state.order[0].color}</span>
                            <span className={classes.order__itemquantity}>Quantity: {this.state.order[0].quantity}</span>
                        </span>
                        <span className={classes.order__itemqprice}>${this.state.order[0].price}</span>
                    </li>
                    <li>
                        <span className={classes.order__image}>
                            <img src={require("../../../assets/img/backpack.jpg")} />
                        </span>
                        <span className={classes.order__item}>
                            <span className={classes.order__itemname}>The Twill Snap Backpack</span>
                            <span className={classes.order__itemcolor}>Reverse Denim + Brown Leather</span>
                            <span className={classes.order__itemquantity}>Quantity: 1</span>
                        </span>
                        <span className={classes.order__itemqprice}>$65</span>
                    </li>
                    <li>
                        <span className={classes.order__image}>
                            <img src={require("../../../assets/img/bag.jpg")} />
                        </span>
                        <span className={classes.order__item}>
                            <span className={classes.order__itemname}>The Twill Zip Tote</span>
                            <span className={classes.order__itemcolor}>Reverse Denim + Black Leather</span>
                            <span className={classes.order__itemquantity}>Quantity: 1</span>
                        </span>
                        <span className={classes.order__itemqprice}>$48</span>
                    </li>
                    <li className={classes.order__calc}>
                        <span>
                            <span>Subtotal</span>
                            <span>Shipping</span>
                            <span>Taxes</span>
                        </span>
                        <span>
                            <span>${subtotal.toFixed(0)}</span>
                            <span>Free</span>
                            <span>${taxes.toFixed(2)}</span>
                        </span>
                    </li>
                    <li className={classes.order__total}>
                        <span>Total</span>
                        <span>${(subtotal + taxes).toFixed(2)}</span>
                    </li>
                </ul>
                <span className={classes.terms}>
                    All purchases are subject to our <a>Terms and Conditions</a>
                </span>
            </div>
        );
    }
}
 
export default OrderSummary;
