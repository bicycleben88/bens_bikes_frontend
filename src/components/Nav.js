import React from 'react';
import { Link } from 'react-router-dom';
import NavStyles from '../components/styles/NavStyles';
import { GlobalContext } from '../App';
import Badge from '../components/styles/Badge';

const Nav = (props) => {
    const { globalState } = React.useContext(GlobalContext);
    const { itemsInOrder } = globalState;

    return(
        <NavStyles>
            <Link to="/">Items</Link>
            <Link to="/cart">
                Cart
                {itemsInOrder ? <Badge><p>!</p></Badge> : null}
            </Link>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
        </NavStyles>
    )
};

export default Nav;