import React from "react";
import { useHistory } from "react-router-dom";
import { useCart } from "../lib/cartState";
import { GlobalContext } from "../App";
import CartItem from "./CartItem";
import CartStyles from "./styles/CartStyles";
import CheckOut from "./CheckOut";

const Cart = () => {
  const history = useHistory();
  const { globalState } = React.useContext(GlobalContext);
  const { url, token } = globalState;
  const { cartOpen, closeCart } = useCart();
  const [user, setUser] = React.useState();

  const getUser = async () => {
    const response = await fetch(`${url}/auto_login`, {
      headers: {
        "Content-Type": "application/JSON",
        Authorization: `bearer: ${token}`,
      },
    });
    const data = await response.json();
    await setUser(data);
  };

  const deleteCartItem = async (cartItemId) => {
    await fetch(`${url}/cartitems/${cartItemId}`, {
      method: "DELETE",
    });
    getUser();
  };

  // const handleCheckout = async () => {
  //   const response = await fetch(`${url}/orders`, {
  //     method: "POST",
  //     headers: {
  //       Authorization: `bearer: ${token}`,
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       user_id: user.id,
  //     }),
  //   });
  //   const data = await response.json();
  //   await console.log(data);
  //   history.push(`/orders/${data.id}`);
  //   closeCart();
  // };

  React.useEffect(() => {
    getUser();
  }, [cartOpen]);

  const loading = () => {
    return (
      <CartStyles open={cartOpen}>
        <h1>{user.username}</h1>
        <button onClick={closeCart} className="close-btn">
          &times;{" "}
        </button>
        <ul>
          {user.cartitems &&
            user.cartitems.map((cartItem) => {
              return (
                <CartItem
                  item={cartItem}
                  key={cartItem.id}
                  handleDelete={deleteCartItem}
                />
              );
            })}
        </ul>
        <CheckOut />
        {/* <button className="checkout" onClick={handleCheckout}>
          Check Out
        </button> */}
      </CartStyles>
    );
  };

  return user ? loading() : "";
};

export default Cart;
