import React from 'react';
import CheckOutStyles from '../components/styles/CheckOutStyles';
import BigButtonStyles from '../components/styles/BigButtonStyles';

const CheckOut = (props) => {
    const { item } = props;
    return(
        <CheckOutStyles>
            <h1>Your Cart</h1>
            <hr/>
            <h2>Item</h2>
            <h3>{item[0].name}</h3>
            <hr/>
            <h2>Subtotal</h2>
            <h3>{item[0].price}</h3>
            <h2>Shipping</h2>
            <h3>19.99</h3>
            <hr/>
            <h1>Total</h1>
            <h2 style={{color: "red"}}>{parseInt(item.price) + 19.99}</h2>
            <BigButtonStyles>
                Check Out
            </BigButtonStyles>
        </CheckOutStyles>
    )
};

export default CheckOut;