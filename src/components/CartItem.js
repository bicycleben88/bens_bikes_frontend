import React from 'react';
import CartItemStyles from '../components/styles/CartItemStyles';
import SmallButton from '../components/SmallButton';
import SmallButtonStyles from '../components/styles/SmallButtonStyle';
import { GlobalContext } from '../App';

const CartItem = (props) => {
    const { globalState } = React.useContext(GlobalContext);
    const { url } = globalState;
    const { item, deleteFunction } = props
    
    return(
        <CartItemStyles>
            <div style={{backgroundImage: `url("${item[0].image}")` }} className="cart-item-image"/>
            <div className="cart-item-remove">
                <h1>{item[0].name}</h1>
                <h3>{item[0].price}</h3>
                <SmallButtonStyles onClick={() => deleteFunction( item[0].id, item[0].order_id)}>
                    Remove Item
                </SmallButtonStyles>
            </div>
        </CartItemStyles>
    )
};

export default CartItem;