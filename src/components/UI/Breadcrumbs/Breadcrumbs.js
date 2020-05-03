import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '../Icon/Icon';
import classes from './Breadcrumbs.module.scss'

const breadcrumbs = () => {
    const linkStyles = {
        color: '#5A1094'
    }

    return (
        <ul className={classes.breadcrumbs__list}>
            <li>
                <NavLink to='/shipping' activeStyle={linkStyles}>Shipping</NavLink>
            </li>
            <li>
                <Icon iconName='chevron-right' />
            </li>
            <li>
                <NavLink to='/billing' activeStyle={linkStyles}>Billing</NavLink>
            </li>
            <li>
                <Icon iconName='chevron-right' />
            </li>
            <li>
                <NavLink to='/payment' activeStyle={linkStyles}>Payment</NavLink>
            </li>
        </ul>
    );
}
 
export default breadcrumbs;