import React from 'react';

import Icon from '../UI/Icon/Icon';
import classes from './Navigation.module.scss';

const navigation = (props) => {
    return (
        <header className={classes.navigation}>
            <div className={classes.container}>
                <div className={classes.navigation__wrap}>
                    <div className={classes.banner}>
                        Some Ecommerce webpage
                    </div>
                    <div className={classes.cart}>
                        <Icon iconName='cart' />
                        <div className={classes.cart__amount}>{props.amount}</div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default navigation;