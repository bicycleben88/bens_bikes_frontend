import React from "react";
import { Link } from "react-router-dom";
import NavStyles from "../components/styles/NavStyles";
import { GlobalContext } from "../App";
import Badge from "../components/styles/Badge";
import { useCart } from "../lib/cartState";

const Nav = (props) => {
  const { globalState, setGlobalState } = React.useContext(GlobalContext);
  const { itemsInOrder, token } = globalState;
  const { openCart } = useCart();

  const logOut = () => {
    return (
      <Link
        to="/"
        onClick={() =>
          setGlobalState({ ...globalState, token: null, userId: null })
        }
      >
        Log Out
      </Link>
    );
  };

  return (
    <NavStyles>
      <Link to="/">Items</Link>
      <button onClick={openCart}>
        Cart
        {itemsInOrder ? (
          <Badge>
            <p>!</p>
          </Badge>
        ) : null}
      </button>
      {token ? logOut() : null}
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </NavStyles>
  );
};

export default Nav;
