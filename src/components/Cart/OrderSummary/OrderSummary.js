import React, { Component } from 'react';

import OrderList from './OrderList/OrderList';
import classes from './OrderSummary.module.scss';

class OrderSummary extends Component {
    state = {
        "order" : {
            "orderSummary" : {
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
            }
        }
    }

    render() { 
        let transformedSummary = [];
        const taxes = 12.12;

        for (let key in this.state.order.orderSummary) {
            transformedSummary.push({
                id: key,
                ...this.state.order.orderSummary[key]
            })
        }

        let subtotal = transformedSummary.reduce((acc, {price, quantity}) => {
            return acc + (price * quantity);
        }, 0);

        return (
            <div className={classes.wrap}>
                <div className={classes.title}>
                    <h2>Order Summary</h2>
                    {/* <div className={classes.edit}>edit order</div> */}
                </div>
                <OrderList 
                    subtotal={subtotal}
                    taxes={taxes}
                    orderInfo={transformedSummary} />
                <span className={classes.terms}>
                    All purchases are subject to our Terms and Conditions
                </span>
            </div>
        );
    }
}
 
export default OrderSummary;
