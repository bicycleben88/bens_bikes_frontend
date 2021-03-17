import React from "react";
import styled from "styled-components";
import { useCart } from "../lib/cartState";

const CartStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid darkorange;
  width: 400px;
  height: 600px;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;
  background-color: ${(props) => props.theme.offwhite};
  transform: translateX(100%);
  transition: transform 0.2s;
  ${(props) => props.open && `transform: translateX(0)`}
`;
const Cart = ({ cartCSS }) => {
  const { cartOpen, closeCart } = useCart();

  return (
    <CartStyles open={cartOpen}>
      <h1>Your Cart </h1>
      <button onClick={closeCart}>&times; </button>
    </CartStyles>
  );
};

export default Cart;
