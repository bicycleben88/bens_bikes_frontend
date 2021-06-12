import React from "react";
import { Link } from "react-router-dom";
import NavStyles from "../components/styles/NavStyles";
import { GlobalContext } from "../App";
import Badge from "../components/styles/Badge";
import { useCart } from "../lib/cartState";

const Nav = () => {
  const { globalState, setGlobalState } = React.useContext(GlobalContext);
  const { itemsInOrder, token } = globalState;
  const { openCart } = useCart();

  const logOut = () => {
    return (
      <Link
        to="/"
        onClick={() => {
          setGlobalState({ ...globalState, token: null });
          window.localStorage.removeItem("token");
        }}
      >
        Log Out
      </Link>
    );
  };

  return (
    <NavStyles>
      <Link to="/items">Items</Link>
      <button onClick={openCart} className="cart-btn">
        Cart
        {itemsInOrder ? (
          <Badge>
            <p>!</p>
          </Badge>
        ) : null}
      </button>
      {token && logOut()}
      {!token && <Link to="/login">Log In</Link>}
      {!token && <Link to="/signup">Sign Up</Link>}

      <a href="https://higginbotham.fun" target="#">
        Portfolio
      </a>
    </NavStyles>
  );
};

export default Nav;
