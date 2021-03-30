import React from "react";
import { GlobalContext } from "../App";
import OrderStyles from "../components/styles/OrderStyles";

const Order = (props) => {
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const [order, setOrder] = React.useState();

  const getOrder = async () => {
    const response = await fetch(`${url}/orders/${props.match.params.id}`);
    const data = await response.json();
    await setOrder(data);
  };

  React.useEffect(() => {
    getOrder();
  }, []);

  const loaded = () => {
    return (
      <OrderStyles>
        <h1>Thank you for your Order</h1>
        <ul className="order-items">
          {order.order_items.map((orderitem) => (
            <li key={orderitem.id}>
              <h2>Item: {orderitem.name}</h2>
              <img src={orderitem.image} alt={orderitem.name} />
              <p>Price: {orderitem.price}</p>
              <p>Qty: {orderitem.quantity} &times;</p>
              <p>Charge: {order.charge}</p>
            </li>
          ))}
        </ul>
        <h2>Total: {order.total}</h2>
      </OrderStyles>
    );
  };

  return order ? (
    loaded()
  ) : (
    <h1 style={{ textAlign: "center" }}>Getting Your Order!</h1>
  );
};

export default Order;
