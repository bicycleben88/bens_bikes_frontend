import React from 'react';
import SmallButtonStyles from './styles/SmallButtonStyle';

const SmallButton = (props) => {
    return(
        <SmallButtonStyles onClick={() => props.click(props.id)}>{props.label}</SmallButtonStyles>
    )
};

export default SmallButton;