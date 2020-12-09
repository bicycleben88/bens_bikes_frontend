import styled, { ThemeProvider } from 'styled-components';

const CheckOutStyles = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: ${props => props.theme.offwhite};
    padding-left: .5rem;
    div {
        position: relative;
    }
    div:hover{
        cursor: pointer;
    }
`;

export default CheckOutStyles;