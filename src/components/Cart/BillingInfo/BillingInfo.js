import React from 'react';

import classes from './BillingInfo.module.scss';

const billingInfo = () => {
    return (
        <div className={classes.wrap}>
            <div>
                <h1>Billing Info</h1>
                <span>Same as shipping</span>
            </div>
            <form className={classes.form}>
                <div className={classes.form__group}>
                    <div className={classes.form__grouptitle}>Billing contact</div>
                    <input placeholder='Full Name' />
                    <input placeholder='Email Address' />
                </div>
                <div className={classes.form__group}>
                    <div className={classes.form__grouptitle}>Billing address</div>
                    <input placeholder='Country' />
                    <input placeholder='City' />
                    <input placeholder='Street Address' />
                    <input placeholder='Apt, Suite, Bldg, Gate Code. (optional)' />
                    <input placeholder='ZIP' />
                </div>
                <button>Continue</button>
            </form>
        </div>
    );
}
 
export default billingInfo;