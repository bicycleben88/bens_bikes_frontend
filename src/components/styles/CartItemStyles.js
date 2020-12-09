import styled from 'styled-components';

const CartItemStyles = styled.div`
    display: flex;
    background-color: ${props => props.theme.offwhite};
    margin: .5rem;
    width: 600px;
    height: 350px;
    align-items: center;
    h1 {
        font-size: 2rem;
    }
    .cart-item-image {
        width: 250px;
        height: 300px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-color: ${props => props.theme.lightBlue};
        margin: 1rem;
    }
    .cart-item-remove{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex: 1;
        padding-right: 1rem;
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