import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PriceStyles from './styles/PriceStyles';
import { GlobalContext } from '../App';

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
    h3 {
        font-weight: 2500;
    }
    a {
        color: ${props => props.theme.black}
    }
    a:hover{
        text-decoration: underline;
    }
`;

const Item = (props) => {
    const { globalState, setGlobalState } = React.useContext(GlobalContext);
    const { item } = props;
    const handleClick = (item) => {
        setGlobalState({...globalState, item: item})
    };

    return(
        <ItemStyles>
            <PriceStyles>
                {item.price}
            </PriceStyles>
            <img src={item.image} alt={item.name}/>
            <Link to="/show" onClick={() => {handleClick(item)}}><h3>{item.name}</h3></Link>
        </ItemStyles>
    )
};

export default Item;