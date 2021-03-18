import styled from "styled-components";

const CartItemStyles = styled.div`
  display: flex;
  padding: 0.5rem;
  margin-top: 0.5rem auto;
  width: 80%;
  align-items: center;
  h1 {
    font-size: 2.5rem;
  }
  .cart-item-image {
    width: 150px;
    height: 150px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${(props) => props.theme.lightBlue};
  }
  .cart-item-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    flex: 1;
    div {
      position: relative;
    }
    div:hover {
      cursor: pointer;
      justify-self: flex-end;
    }
  }
`;

export default CartItemStyles;
