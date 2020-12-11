import React from 'react';
import CartContainer from '../components/styles/CartContainer';
import { GlobalContext } from '../App';
import CartItem from '../components/CartItem';
import CheckOut from '../components/CheckOut';

const Cart = (props) => {
    const { globalState, setGlobalState } = React.useContext(GlobalContext);
    const { url, orderId } = globalState;
    const [order, setOrder] = React.useState(null);

    const getOrder = async () => {
        if (orderId) {
            const response = await fetch(`${url}/orders/${orderId}`);
            const data = await response.json();
            await setOrder(data);
        }
    };

    const deleteItem = async (id) => {
        await fetch(`${url}/cartitems/${id}`, {
            method: "DELETE"
        });
    };

    const deleteOrder = async (id) => {
        await fetch(`${url}/orders/${id}`, {
            method: "DELETE"
        });
        await setOrder(null);
        await setGlobalState({...globalState, orderId: null, itemsInOrder: false});
    };
    
    const handleDelete = (itemId, orderId) => {
        // if deleting the last item in the cart
            // delete order
        if (order.cartitems.length === 1) {
            deleteOrder(orderId);
        } else {
            deleteItem(itemId);
            getOrder();
        }
    };
    
    React.useEffect(() => {
        getOrder();
    },[])

    const loaded = () => {
        return(
            <CartContainer>
                <div>
                {order.cartitems.map(item => {
                    return(
                        <CartItem 
                            item={item} 
                            handleDelete={handleDelete} 
                            key={item.id} />
                    )
                })}
                </div>
                <CheckOut 
                    items={order.cartitems} />
            </CartContainer>
        )
    };
    return order !== null ? loaded() : <h1 style={{textAlign: "center"}}>Your Cart is empty</h1>
};

export default Cart; 