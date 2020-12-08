import React from 'react';
import styled from 'styled-components';
import PriceStyles from './styles/PriceStyles';

const ItemStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 200px;
    position: relative;
    background-color: white;
    box-shadow: ${props => props.theme.boxS};
    text-align: center;
    img {
        width: 200px;
        align-self: center;
        height: 133px;
    }
`;

const Item = (props) => {
    const { item } = props;
    return(
        <ItemStyles>
            <PriceStyles>
                {item.price}
            </PriceStyles>
            <img src={item.image} alt={item.name}/>
            <h3>{item.name}</h3>
        </ItemStyles>
    )
};

export default Item;