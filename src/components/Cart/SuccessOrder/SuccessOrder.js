import React from 'react';

const successOrder = (props) => {
    return (
        <>
            <h1>Thank you for your order!</h1> 
            <p>Order number is: {parseInt(Math.random() * 6 * 10e6)}</p>
            <p>You will receive an email confirmation shortly to&nbsp; 
            <a href={`mailto:${props.customerEmail}`}>{props.customerEmail}</a></p>
            <p>Estimated delivery day is Friday 1st May 2021</p>
        </>
    );
}
 
export default successOrder;
