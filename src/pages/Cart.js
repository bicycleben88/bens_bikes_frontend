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
    const [orders, setOrders] = React.useState([]);

    const getOrders = async () => {
        const response = await fetch(`${url}/orders`);
        const data = await response.json();
        setOrders(data);
    };

    const deleteItemAndOrder = async ( item_id ,order_id) => {
        await fetch(`${url}/cartitems/${item_id}`, {
            method: "DELETE"
        });
        await fetch(`${url}/orders/${order_id}`, {
            method: "DELETE"
        });
        await getOrders();
    };

    React.useEffect(() => {
        getOrders();
    },[])

    const loaded = () => {
        return(
            <CartContainer>
                <CartItem 
                    item={orders[orders.length -1].cartitems} 
                    deleteFunction={deleteItemAndOrder} />
                <CheckOut 
                    item={orders[orders.length -1].cartitems} />
            </CartContainer>
        )
    };
    return orders.length > 0 ? loaded() : <h1 style={{textAlign: "center"}}>Your Cart is empty</h1>
};

export default Cart;