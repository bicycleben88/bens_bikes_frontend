import React from 'react';
import BigButtonStyles from './styles/BigButtonStyles';

const BigButton = (props) => {
    return <BigButtonStyles>{props.label}</BigButtonStyles>
};

export default BigButton;