import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BigButton from '../components/BigButton';
import { GlobalContext } from '../App';

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 800px;
        max-height: 600px;
    }
    h1{
        font-size: 4rem;
    }
    h4 {
        font-size: 2rem;
        text-align: center;
    }
    a {
        color: ${props => props.theme.black}
    }
`;

const Show = (props) => {
    const { globalState } = React.useContext(GlobalContext);
    const { url } = globalState;
    const { item } = props;

    const createOrder = async (item) => {
        const response = await fetch(`${url}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON"
            },
            body: JSON.stringify({qty: 1})
        });
        const data = await response.json();
        await createCartItem(data.id, item);
    };

    const createCartItem = async (id, item) => {
        const cartItem = {...item, order_id: id}
        const response = await fetch(`${url}/cartitems`, {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON", 
            },
            body: JSON.stringify(cartItem)
        });
        const data = await response.json();
    };

    return(
        <ItemContainer>
            <h1>{item.name}</h1>
            <div style={{position: "relative"}}>
                <img src={item.largeimage} alt={item.name} />
                <Link to='/cart' onClick={() => createOrder(item)}>
                    <BigButton label="Add to Cart" />
                </Link>
            </div>
            <h4>{item.description}</h4>
            <p>Left In Stock: {item.qty}</p>
        </ItemContainer>
    )
};

export default Show;