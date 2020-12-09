import React from 'react';
import CheckOutStyles from '../components/styles/CheckOutStyles';
import BigButton from '../components/BigButton';

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
            <h2 style={{color: "red"}}>{item[0].price + 19.99}</h2>
            <BigButton label="Check Out" />
        </CheckOutStyles>
    )
};

export default CheckOut;