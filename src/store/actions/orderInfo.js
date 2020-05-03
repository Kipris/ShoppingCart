import * as actionTypes from './actionTypes';

export const addShippingInfo = (shippingInfo) => {
    return {
        type: actionTypes.ADD_SHIPPING_INFO,
        shippingInfo
    }
}

export const addBillingInfo = (billingInfo) => {
    return {
        type: actionTypes.ADD_BILLING_INFO,
        billingInfo
    }
}

export const addPaymentInfo = (paymentInfo) => {
    return {
        type: actionTypes.ADD_PAYMENT_INFO,
        paymentInfo
    }
}

