import React from "react";
import CartItemStyles from "../components/styles/CartItemStyles";
import SmallButtonStyles from "../components/styles/SmallButtonStyle";

const CartItem = (props) => {
  const { item, handleDelete, cartItemId } = props;
  return (
    <CartItemStyles>
      <div
        style={{ backgroundImage: `url("${item.image}")` }}
        className="cart-item-image"
      />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <SmallButtonStyles
          onClick={() => handleDelete(cartItemId)}
          style={{ width: "100px" }}
        >
          Remove Item
        </SmallButtonStyles>
      </div>
    </CartItemStyles>
  );
};

export default CartItem;
