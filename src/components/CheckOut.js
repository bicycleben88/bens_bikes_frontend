import React from 'react';
import CheckOutStyles from '../components/styles/CheckOutStyles';
import BigButtonStyles from '../components/styles/BigButtonStyles';

const CheckOut = (props) => {
    const { items } = props;
    let itemNames = [];
    let itemPrices = [];

    items.map(item => {
        itemNames.push(item.name);
        itemPrices.push(item.price);
    });

    const priceTotal = itemPrices.reduce((acc, val) => parseInt(acc) + parseInt(val));

    return(
        <CheckOutStyles>
            <h1>Your Cart</h1>
            <hr/>
            <h2>Item</h2>
            {itemNames.map(item => <p>{item}</p>)}
            <hr/>
            <h2>Subtotal</h2>
            <p>{priceTotal}</p>
            <h2>Shipping</h2>
            <p>19.99</p>
            <hr/>
            <h1>Total</h1>
            <h2 style={{color: "red"}}>{parseInt(priceTotal) + 19.99}</h2>
            <BigButtonStyles>
                Check Out
            </BigButtonStyles>
        </CheckOutStyles>
    )
};

export default CheckOut;