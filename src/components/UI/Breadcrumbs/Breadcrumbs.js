import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '../Icon/Icon';
import classes from './Breadcrumbs.module.scss'

const breadcrumbs = (props) => {
    const linkStyles = {
        color: '#5A1094'
    }
    let breadcrumbs = null;
    if (!props.orderInfo.order.paymentInfo) {
        breadcrumbs = (
            <ul className={classes.breadcrumbs__list}>
                <li>
                    <NavLink to='/shipping' activeStyle={linkStyles}>Shipping</NavLink>
                </li>
                <li>
                    <Icon iconName='chevron-right' />
                </li>
                <li>
                    {props.orderInfo.order.shippingInfo
                    ? <NavLink to='/billing' activeStyle={linkStyles}>Billing</NavLink>
                    : <span>Billing</span>}
                </li>
                <li>
                    <Icon iconName='chevron-right' />
                </li>
                <li>
                    {props.orderInfo.order.billingInfo
                    ? <NavLink to='/payment' activeStyle={linkStyles}>Payment</NavLink>
                    : <span>Payment</span>}
                </li>
            </ul>
        )
    }
    return breadcrumbs;
}
 
export default breadcrumbs;
