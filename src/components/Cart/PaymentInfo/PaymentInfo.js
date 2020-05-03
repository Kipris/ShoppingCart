import React from 'react';

import classes from './PaymentInfo.module.scss';

const paymentInfo = () => {
    return (
        <div className={classes.wrap}>
            <h1>Payment</h1>
            <div>
                <i className="icon"></i>
                This is a secure 128-bit SSL encrypted payment
            </div>
            <form className={classes.form}>
                <div className={classes.form__group}>
                    <div className={classes.form__grouptitle}>Cardholder name</div>
                    <input placeholder='Name as it appears on your card' />
                </div>
                <div className={classes.form__group}>
                    <div className={classes.form__grouptitle}>Card number</div>
                    <input placeholder='XXXX XXXX XXXX XXXX' />
                </div>
                <div className={classes.form__group}>
                    <div className={classes.form__grouptitle}>Expire date</div>
                    <input placeholder='MM / YY' />
                </div>
                <div className={classes.form__group}>
                    <div className={classes.form__grouptitle}>Security code</div>
                    <input />
                </div>
                <button>Pay securately</button>
            </form>
        </div>
    );
}
 
export default paymentInfo;