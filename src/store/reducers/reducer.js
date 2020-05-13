import * as actionTypes from '../actions/actionTypes';

const initialState = {
    order: {
        orderSummary: {
            "M5rXamLm1GjgE7pdnje" : {
            "color" : "Black",
            "imageUrl" : "https://res.cloudinary.com/everlane/image/upload/c_scale/c_fill,dpr_2.0,f_auto,q_auto,w_auto:100:1200/v1/i/13301929_0368.jpg",
            "name" : "The Chelsea Boot",
            "price" : 235,
            "quantity" : 1
            },
            "M5yuWDiSdf6Iu26JO8h" : {
            "color" : "Reverse Denim + Brown Leather",
            "imageUrl" : "https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.0,f_jpg,h_1200,q_85,w_1200/v1/i/18d59f68_9d41.jpg",
            "name" : "The Twill Snap Backpack",
            "price" : 65,
            "quantity" : 1
            },
            "M5yuWDiSdf6Iu26JgwK" : {
            "color" : "Reverse Denim + Black Leather",
            "imageUrl" : "https://i.pinimg.com/474x/c9/98/b4/c998b444c27076dcd436648319f14a21.jpg",
            "name" : "The Twill Zip Tote",
            "price" : 48,
            "quantity" : 1
            }
        },
        shippingInfo: null,
        billingInfo: null,
        paymentInfo: null
    },
    loading: false,
    isOrdered: false,
    error: false
}

const addShippingInfo = (state, action) => {
    return {
        ...state,
        order: {
            ...state.order,
            shippingInfo: {
                ...state.order.shippingInfo,
                ...action.shippingInfo
            }
        }
    }
}

const addBillingInfo = (state, action) => {
    return {
        ...state,
        order: {
            ...state.order,
            billingInfo: {
                ...state.order.billingInfo,
                ...action.billingInfo
            }
        }
    }
}

const addPaymentInfo = (state, action) => {
    return {
        ...state,
        order: {
            ...state.order,
            paymentInfo: {
                ...state.order.paymentInfo,
                ...action.paymentInfo
            }
        }
    }
}

const makeOrderStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const makeOrderSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        isOrdered: true
    }
}

const makeOrderFail = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_SHIPPING_INFO: return addShippingInfo(state, action);
        case actionTypes.ADD_BILLING_INFO: return addBillingInfo(state, action);
        case actionTypes.ADD_PAYMENT_INFO: return addPaymentInfo(state, action);
        case actionTypes.MAKE_ORDER_START: return makeOrderStart(state, action);
        case actionTypes.MAKE_ORDER_SUCCESS: return makeOrderSuccess(state, action);
        case actionTypes.MAKE_ORDER_FAIL: return makeOrderFail(state, action);
        default: return state;
    }
}

export default reducer;
