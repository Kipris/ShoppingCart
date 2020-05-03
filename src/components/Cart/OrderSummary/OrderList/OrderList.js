import React from 'react';

import OrderItem from './OrderItem/OrderItem';
import classes from './OrderList.module.scss';

const orderList = (props) => {
    let orderItems = null;
    if (props.orderInfo) {
        orderItems = props.orderInfo.map(item => {
            return <OrderItem 
                key={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                color={item.color}
                quantity={item.quantity}
                price={item.price} />
        })
    }
    return (
        <ul className={classes.order}>
            {orderItems}
            <li className={classes.order__calc}>
                <span>
                    <span>Subtotal</span>
                    <span>Shipping</span>
                    <span>Taxes</span>
                </span>
                <span>
                    <span>${props.subtotal.toFixed(0)}</span>
                    <span>Free</span>
                    <span>${props.taxes.toFixed(2)}</span>
                </span>
            </li>
            <li className={classes.order__total}>
                <span>Total</span>
                <span>${(props.subtotal + props.taxes).toFixed(2)}</span>
            </li>
        </ul>
    );
}
 
export default orderList;
