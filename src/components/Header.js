import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Logo = styled.h1`
    font-size: 4rem;
    text-align: right;
    padding-right: 1.5rem;
    margin: 0;
    a {
        background-color: ${props => props.theme.boldBlue};
        padding: 1rem;
        color: ${props => props.theme.lightBlue};
    }
    @media (max-width: 700px) {
        text-align: center;
    }
`;

const Header = (props) => {
return(
    <>
        <Logo><Link to="/">Ben's Bikes</Link></Logo>
        <Nav />
    </>
)
};

export default Header;