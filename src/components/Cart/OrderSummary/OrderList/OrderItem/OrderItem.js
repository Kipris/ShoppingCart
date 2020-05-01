import React from 'react';

import classes from './OrderItem.module.scss';

const orderItem = (props) => {
    return (
        <li className={classes.item}>
            <span className={classes.item__image}>
                <img src={props.imageUrl} />
            </span>
            <span className={classes.item__info}>
                <span className={classes.item__name}>{props.name}</span>
                <span className={classes.item__color}>{props.color}</span>
                <span className={classes.item__quantity}>Quantity: {props.quantity}</span>
            </span>
            <span className={classes.item__price}>${props.price}</span>
        </li>
    );
}
 
export default orderItem;
