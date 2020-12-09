import styled from 'styled-components';

const CartItemStyles = styled.div`
    display: flex;
    background-color: white;
    box-shadow: ${props => props.theme.boxS};
    padding: .5rem;
    width: 600px;
    height: 350px;
    align-items: center;
    h1 {
        font-size: 2.5rem;
    }
    .cart-item-image {
        width: 250px;
        height: 300px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-color: ${props => props.theme.lightBlue};
    }
    .cart-item-remove{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        height: 100%;
        flex: 1;
        div {
            position: relative;
        }
        div:hover{
            cursor: pointer;
            justify-self: flex-end;
        }
    }
`;

export default CartItemStyles;