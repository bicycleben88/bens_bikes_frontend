import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../App';
import ItemStyles from '../components/styles/ItemStyles';
import SmallButtonStyles from '../components/styles/SmallButtonStyle';

const Item = (props) => {
    const { globalState, setGlobalState } = React.useContext(GlobalContext);
    const { item } = props;
    const handleClick = (item) => {
        setGlobalState({...globalState, item: item});
    };

    return(
        <ItemStyles>
            <SmallButtonStyles>
                {item.price}
            </SmallButtonStyles>
            <img 
                src={item.image} 
                alt={item.name} />
            <Link 
                to="/show" 
                onClick={() => {handleClick(item)}}>
                <h3>{item.name}</h3>
            </Link>
        </ItemStyles>
    );
};

export default Item;