import React from 'react';
import CartItemStyles from '../components/styles/CartItemStyles';
import SmallButton from '../components/SmallButton';

const CartItem = (props) => {
    const { item } = props
    return(
        <CartItemStyles>
            <div style={{backgroundImage: `url("${item[0].image}")` }} className="cart-item-image"/>
            <div className="cart-item-remove">
                <h1>{item[0].name}</h1>
                <h3>{item[0].price}</h3>
                <SmallButton label="Remove" />
            </div>
        </CartItemStyles>
    )
};

export default CartItem;