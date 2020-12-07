import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-image-carousel';

import { GlobalContext } from '../App';
import Item from '../components/Item';

const Items = (props) => {
    const { globalState } = React.useContext(GlobalContext);
    const { url } = globalState;
    const [items, setItems] = React.useState([]);

    const ItemsContainer = styled.div`
        display: flex;
    `;
    
    const getItems = async () => {
        const repsonse = await fetch (`${url}/items`);
        const data = await repsonse.json();
        setItems(data);
    };

    React.useEffect(() => {
        getItems()
    }, []);

    const loaded = () => {
        
        
        return (
            <ItemsContainer>
                {items.map((item) => <Item item={item} />)}
            </ItemsContainer>
        )
    };

    return (
        Items.length > 0 ? loaded() : <h3>getting items...</h3>
    )
};

export default Items;