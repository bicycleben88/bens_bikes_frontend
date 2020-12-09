import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../App';
import CartItem from '../components/CartItem';
import CheckOut from '../components/CheckOut';

const CartContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Cart = (props) => {
    const { globalState } = React.useContext(GlobalContext);
    const { url } = globalState;
    const [orders, setOrders] = React.useState(null);

    const getOrders = async () => {
        const response = await fetch(`${url}/orders`);
        const data = await response.json();
        setOrders(data);
    };

    React.useEffect(() => {
        getOrders();
    },[])

    const loaded = () => {
        return(
            <CartContainer>
                <CartItem item={orders[orders.length -1].cartitems} />
                <CheckOut item={orders[orders.length -1].cartitems} />
            </CartContainer>
        )
    };
    return orders ? loaded() : <h1 style={{textAlign: "center"}}>Your Cart is empty</h1>
};

export default Cart;