import React from "react";
import styled from "styled-components";
import { useCart } from "../lib/cartState";
import { GlobalContext } from "../App";
import CartItem from "./CartItem";
// import useUser from "../lib/useUser";

const CartStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid darkorange;
  width: 400px;
  height: 600px;
  position: relative;
  position: fixed;
  z-index: 2;
  right: 0;
  top: 0;
  background-color: ${(props) => props.theme.offwhite};
  transform: translateX(100%);
  transition: transform 0.2s;
  .close-btn {
    position: absolute;
    top: 2px;
    right: 2px;
    background-color: darkorange;
    border: none;
  }
  .close-btn:hover {
    cursor: pointer;
  }
  ${(props) => props.open && `transform: translateX(0)`}
`;
const Cart = () => {
  const { globalState, setGlobalState } = React.useContext(GlobalContext);
  const { url, orderId, token } = globalState;
  const { cartOpen, closeCart } = useCart();
  const [order, setOrder] = React.useState(null);
  const [user, setUser] = React.useState(null);
  // const user = useUser();
  // console.log(user);
  console.log(token);
  const getUser = async () => {
    const response = await fetch(`${url}/auto_login`, {
      headers: {
        "Content-Type": "application/JSON",
        Authorization: `bearer: ${token}`,
      },
    });
    const data = await response.json();
    console.log(data.orders);
    setUser(data);
    return data;
  };

  const getOrder = async () => {
    if (orderId) {
      const response = await fetch(`${url}/orders/${orderId}`);
      const data = await response.json();
      await setOrder(data);
    }
  };

  const handleDelete = (itemId, orderId) => {
    // if deleting the last item in the cart
    // delete order
    if (order.cartitems.length === 1) {
      deleteOrder(orderId);
    } else {
      deleteItem(itemId);
      getOrder();
    }
  };

  const deleteItem = async (id) => {
    await fetch(`${url}/cartitems/${id}`, {
      method: "DELETE",
    });
  };

  const deleteOrder = async (id) => {
    await fetch(`${url}/orders/${id}`, {
      method: "DELETE",
    });
    await setOrder(null);
    await setGlobalState({
      ...globalState,
      orderId: null,
      itemsInOrder: false,
    });
  };

  React.useEffect(() => {
    getOrder();
    getUser();
  }, [cartOpen]);

  if (user === null) return null;

  return (
    <CartStyles open={cartOpen}>
      <h1>{user.username}'s Cart</h1>
      <button onClick={closeCart} className="close-btn">
        &times;{" "}
      </button>
      {/* <ul>
        {user.orders.map((item) => {
          <CartItem item={item} handleDelete={handleDelete} key={item} />;
        })}
      </ul> */}
      {/* {order !== null &&
        order.cartitems.map((cartitem) => (
          <CartItem
            item={cartitem}
            handleDelete={handleDelete}
            key={cartitem.id}
          />
        ))} */}
    </CartStyles>
  );
};

export default Cart;
