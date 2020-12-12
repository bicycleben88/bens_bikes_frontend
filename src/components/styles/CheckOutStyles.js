import styled from 'styled-components';

const CheckOutStyles = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem;
    align-items: flex-end;
    width: 200px;
    background-color: white;
    box-shadow: ${props => props.theme.boxS};
    height: 100%;
    h1 {
        background-color: ${props => props.theme.lightBlue};
        width: 100%;
        text-align: center;
    }
    div {
        position: relative;
    }
    div:hover{
        cursor: pointer;
    }
    a {
        color: ${props => props.theme.black}
    }
`;

export default CheckOutStyles;