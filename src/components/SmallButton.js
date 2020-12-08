import React from 'react';
import SmallButtonStyles from './styles/SmallButtonStyle';

const SmallButton = (props) => {
    return(
        <SmallButtonStyles>{props.label}</SmallButtonStyles>
    )
};

export default SmallButton;