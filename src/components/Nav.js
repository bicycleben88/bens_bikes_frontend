import React from 'react';
import { Link } from 'react-router-dom';
import NavStyles from '../components/styles/NavStyles';

const Nav = (props) => {
return(
    <NavStyles>
        <Link to="/">Items</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
    </NavStyles>
)
};

export default Nav;