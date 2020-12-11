import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import HeaderStyles from './styles/HeaderStyles';
import SubHeading from '../components/styles/SubHeading';
import Logo from '../components/styles/Logo';

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