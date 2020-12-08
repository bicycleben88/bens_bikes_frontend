import React from 'react';
import styled from 'styled-components';

const BuyStyles = styled.div`
    background-color: darkorange;
    width: 125px; 
    position: absolute;
    right: -2px;
    top: -2px;
    text-align: center;
    font-size: 2rem;
`;

const BuyButton = () => {
    return <BuyStyles>Buy Me!</BuyStyles>
};

export default BuyButton;