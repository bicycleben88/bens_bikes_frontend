import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyles = styled.nav`
    display: flex;
    justify-content: flex-end;
    a {
        padding: .5rem 1rem;
        border-left: 1px solid ${props => props.theme.lightBlue};
        font-size: 2rem;
        color: ${props => props.theme.lightBlue};
        text-transform: uppercase;
    }
    a:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }
    @media (max-width: 700px) {
        justify-content: center
    }
`;

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