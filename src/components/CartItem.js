import React from 'react';
import CartItemStyles from '../components/styles/CartItemStyles';

const CartItem = (props) => {
    const { item } = props
    return(
        <CartItemStyles>
            <img src={item.image} alt={item.name} />
            <h1>{item.name}</h1>
            <h3>{item.price}</h3>
            
        </CartItemStyles>
    )
};

export default CartItem;