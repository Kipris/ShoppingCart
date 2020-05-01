import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '../Icon/Icon';
import classes from './Breadcrumbs.module.scss'

const breadcrumbs = (props) => {
    return (
        <ul className={classes.breadcrumbs__list}>
            <li><a href="#" className={classes.active}>Shipping</a></li>
            <li><Icon iconName='chevron-right' /></li>
            <li><a href="#">Billing</a></li>
            <li><Icon iconName='chevron-right' /></li>
            <li><a href="#">Payment</a></li>
        </ul>
    );
}
 
export default breadcrumbs;