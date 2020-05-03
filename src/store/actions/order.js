import * as actionTypes from './actionTypes';

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START
    }
}

export const fetchOrderSuccess = () => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS
    }
}

export const fetchOrderFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDER_FAIL
    }
}

export const fetchOrder = () => {
    return {
        type: actionTypes.FETCH_ORDER
    }
}
