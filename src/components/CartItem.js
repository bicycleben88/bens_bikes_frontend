import React from "react";
import CartItemStyles from "../components/styles/CartItemStyles";
import SmallButtonStyles from "../components/styles/SmallButtonStyle";

const CartItem = (props) => {
  const { item, handleDelete } = props;
  return (
    <CartItemStyles>
      <div
        style={{ backgroundImage: `url("${item.item.image}")` }}
        className="cart-item-image"
      />
      <div className="cart-item-info">
        <h3>{item.item.name}</h3>
        <p>{item.item.price}</p>
        <p>Qty: {item.quantity} &times;</p>
        <SmallButtonStyles
          onClick={() => handleDelete(item.id)}
          style={{ width: "100px" }}
        >
          Remove Item
        </SmallButtonStyles>
      </div>
    </CartItemStyles>
  );
};

export default CartItem;
