import React, { Component } from 'react';

import classes from './ShippingInfo.module.scss';

class ShippingInfo extends Component {
    state = {

    }

    render() { 
        return (
            <div className={classes.shippinginfo__wrap}>
                <h1>Shipping Info</h1>
                <form className={classes.form}>
                    <div className={classes.form__group}>
                        <div className={classes.form__grouptitle}>Recipient</div>
                        <input placeholder='Full Name' />
                        <input placeholder='Daytime Phone' />
                    </div>
                    <div className={classes.form__group}>
                        <div className={classes.form__grouptitle}>Address</div>
                        <input placeholder='Location' />
                        <input placeholder='Street Address' />
                        <input placeholder='Apt, Suite, Bldg, Gate Code. (optional)' />
                        <input placeholder='ZIP' />
                    </div>
                    <button>Continue</button>
                </form>
            </div>
        );
    }
}
 
export default ShippingInfo;
