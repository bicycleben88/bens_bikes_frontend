import React from "react";
import { useCart } from "../lib/cartState";
import { GlobalContext } from "../App";
import CartItem from "./CartItem";
import CartStyles from "./styles/CartStyles";

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

  const deleteCartItem = async (id) => {
    await fetch(`${url}/cartitems/${id}`, {
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
                  item={cartItem.item}
                  key={cartItem.id}
                  handleDelete={deleteCartItem}
                  cartItemId={cartItem.id}
                />
              );
            })}
        </ul>
      </CartStyles>
    );
  };

  return user ? loading() : <h1>loading cart...</h1>;
};

export default Cart;
