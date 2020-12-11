import React from 'react';
import { GlobalContext } from '../App';
import BigButtonStyles from '../components/styles/BigButtonStyles';
import ShowStyles from '../components/styles/ShowStyles';

const Show = (props) => {
    const { globalState, setGlobalState } = React.useContext(GlobalContext);
    const { url, itemsInOrder, orderId } = globalState;
    const { item } = props;

    const createOrder = async (item) => {
        // if cart is empty
            // create a new order
        if (!itemsInOrder) {
            const response = await fetch(`${url}/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/JSON"
                },
                body: JSON.stringify({qty: 1})
            });
            const data = await response.json();
            await createCartItem(data.id, item);
            await setGlobalState({...globalState, orderId: data.id, itemsInOrder: true})
        } else {
            createCartItem(orderId, item);
        };
    };

    const createCartItem = async (id, item) => {
        // create new item with order_id 
        const cartItem = {...item, order_id: id};
        await fetch(`${url}/cartitems`, {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON", 
            },
            body: JSON.stringify(cartItem)
        });
    };

    return(
        <ShowStyles>
            <h1>{item.name}</h1>
            <div 
                style={{position: "relative"}}>
                <img 
                    src={item.largeimage} 
                    alt={item.name} />
                <BigButtonStyles 
                    onClick={() => createOrder(item)}>
                    Add To Cart
                </BigButtonStyles>
            </div>
            <h4>{item.description}</h4>
            <p>Left In Stock: {item.qty}</p>
        </ShowStyles>
    )
};

export default Show;