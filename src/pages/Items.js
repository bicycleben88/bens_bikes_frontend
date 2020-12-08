import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-image-carousel';

import { GlobalContext } from '../App';
import Item from '../components/Item';

const Items = (props) => {
    const { globalState } = React.useContext(GlobalContext);
    const { url } = globalState;
    const [items, setItems] = React.useState([]);
    let carouselImages = [];

    const ItemsContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-end;
        margin: 0 auto;
        max-width: ${props => props.theme.maxWidth};
        .carousel{
            align-self: flex-start;
            img {
                width: 1000px;
                height: 600px;
            }
        }
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
        
        items.map((item) => carouselImages.push(item.largeimage));
        
        return (
            <div>
                <ItemsContainer>
                    <Carousel 
                        images={carouselImages}
                        thumb={true}
                        loop={true}
                        autoplay={4000} />
                    {items.map((item) => <Item item={item} />)}
                </ItemsContainer>
            </div>
        )
    };

    return (
        Items.length > 0 ? loaded() : <h3>getting items...</h3>
    )
};

export default Items;