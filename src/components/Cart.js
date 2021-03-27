import React from "react";
import { useCart } from "../lib/cartState";
import { GlobalContext } from "../App";
import CartItem from "./CartItem";
import CartStyles from "./styles/CartStyles";
import CheckOut from "./CheckOut";

const Cart = () => {
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
        <CheckOut user={user} />
      </CartStyles>
    );
  };

  return user ? loading() : "";
};

export default Cart;
