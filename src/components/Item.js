import React from 'react';
import { Link } from 'react-router-dom';
import SmallButton from '../components/SmallButton';
import { GlobalContext } from '../App';
import ItemStyles from '../components/styles/ItemStyles';

const Item = (props) => {
    const { globalState, setGlobalState } = React.useContext(GlobalContext);
    const { item } = props;
    const handleClick = (item) => {
        setGlobalState({...globalState, item: item})
    };

    return(
        <ItemStyles>
            <SmallButton label={item.price} />
            <img src={item.image} alt={item.name}/>
            <Link to="/show" onClick={() => {handleClick(item)}}>
                <h3>{item.name}</h3>
            </Link>
        </ItemStyles>
    )
};

export default Item;