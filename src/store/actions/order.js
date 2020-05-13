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

export const makeOrder = (order) => {
    return {
        type: actionTypes.MAKE_ORDER,
        order
    }
}

export const makeOrderStart = () => {
    return {
        type: actionTypes.MAKE_ORDER_START
    }
}

export const makeOrderSuccess = () => {
    return {
        type: actionTypes.MAKE_ORDER_SUCCESS
    }
}

export const makeOrderFail = (error) => {
    return {
        type: actionTypes.MAKE_ORDER_FAIL,
        error
    }
}
