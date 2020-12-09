import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import HeaderStyles from './styles/HeaderStyles';

const Logo = styled.h1`
    font-size: 5rem;
    text-align: right;
    padding-right: 1.5rem;
    margin: 0;
    a {
        background-color: rgba(0, 0, 0, 0.4);
        padding: 1rem;
        color: ${props => props.theme.lightBlue};
    }
    @media (max-width: 700px) {
        text-align: center;
    }
`;
const SubHeading = styled.h2`
    color: ${props=> props.theme.lightBlue};
    background-color: rgba(0, 0, 0, 0.4);
    text-align: center;
    font-size: 3rem;
    margin: 7rem 2rem;
`;

const Header = (props) => {
    return(
        <HeaderStyles>
            <Logo><Link to="/">Ben's Bikes</Link></Logo>
            <Nav />
            <SubHeading>Badass Bikes. And the Gear to go with Them.</SubHeading>
        </HeaderStyles>
    )
};

export default Header;