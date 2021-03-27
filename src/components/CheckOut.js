import React from "react";
import { Link } from "react-router-dom";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFormStyles from "./styles/CheckOutFormStyles";
import { GlobalContext } from "../App";

const stripeLib = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const CheckOutForm = () => {
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
    console.log({ paymentMethod });
    // const response = await fetch(`${url}/orders`, {
    //   method: "POST",
    //   headers: {
    //     Authorization: `bearer: ${token}`,
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     user_id: user.id,
    //   }),
    // });
    // const data = await response.json();
    // await console.log(data);
    // history.push(`/orders/${data.id}`);
    // closeCart();
  };

  return (
    <CheckOutFormStyles onSubmit={handleCheckout}>
      {error && <p className="error">{error.message}</p>}
      <CardElement />
      <button className="checkout">Check Out</button>
    </CheckOutFormStyles>
  );
};

const CheckOut = () => {
  return (
    <Elements stripe={stripeLib}>
      <CheckOutForm />
    </Elements>
  );
};

export default CheckOut;
