import React from 'react';
import { GlobalContext } from '../App';
import CartItem from '../components/CartItem';

const Cart = (props) => {
    const { globalState } = React.useContext(GlobalContext);
    const { item } = globalState;

    return(
        <CartItem item={item} />
    )
};

export default Cart;