import React from "react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFormStyles from "./styles/CheckOutFormStyles";
import { GlobalContext } from "../App";
import { useCart } from "../lib/cartState";

const stripeLib = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const CheckOutForm = ({ user }) => {
  const history = useHistory();
  const { globalState } = React.useContext(GlobalContext);
  const { url, token } = globalState;
  const { closeCart } = useCart();
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState();
  const stripe = useStripe();
  const elements = useElements();

  const handleCheckout = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (error) {
      setError(error);
      return;
    }

    const response = await fetch(`${url}/orders`, {
      method: "POST",
      headers: {
        Authorization: `bearer: ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        stripe_token: paymentMethod.id,
      }),
    });
    const data = await response.json();
    history.push(`/orders/${data.id}`);
    closeCart();
  };

  return (
    <CheckOutFormStyles onSubmit={handleCheckout}>
      {error && <p className="error">{error.message}</p>}
      <CardElement />
      <button className="checkout">Check Out</button>
    </CheckOutFormStyles>
  );
};

const CheckOut = ({ user }) => {
  return (
    <Elements stripe={stripeLib}>
      <CheckOutForm user={user} />
    </Elements>
  );
};

export default CheckOut;
