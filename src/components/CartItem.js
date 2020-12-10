import React from 'react';
import CartItemStyles from '../components/styles/CartItemStyles';
import SmallButtonStyles from '../components/styles/SmallButtonStyle';

const CartItem = (props) => {
    const { item, deleteFunction } = props
    
    return(
        <CartItemStyles>
            <div 
                style={{backgroundImage: `url("${item.image}")` }} 
                className="cart-item-image" />
            <div className="cart-item-remove">
                <h1>{item.name}</h1>
                <h3>{item.price}</h3>
                <SmallButtonStyles 
                    onClick={() => deleteFunction( item.id, item.order_id)}
                    style={{width: "100px"}}>
                    Remove Item
                </SmallButtonStyles>
            </div>
        </CartItemStyles>
    )
};

export default CartItem;