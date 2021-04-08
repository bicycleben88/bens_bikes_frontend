import React from "react";
import { GlobalContext } from "../App";
import BigButtonStyles from "../components/styles/BigButtonStyles";
import ShowStyles from "../components/styles/ShowStyles";

const Show = (props) => {
  const id = props.match.params.id;

  const { globalState, setGlobalState } = React.useContext(GlobalContext);
  const { url, userId, token } = globalState;
  const [item, setItem] = React.useState(null);

  const getItem = async () => {
    const response = await fetch(`${url}/items/${id}`);
    const data = await response.json();
    await setItem(data);
  };

  const addToCart = async () => {
    const response = await fetch(`${url}/cartitems`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer: ${token}`,
      },
      body: JSON.stringify({
        item_id: id,
        user_id: userId,
      }),
    });
    const data = await response.json();
  };

  React.useEffect(() => {
    getItem();
  }, []);

  const loading = () => {
    return (
      <ShowStyles>
        <h1>{item.name}</h1>
        <div style={{ position: "relative" }}>
          <img src={item.largeimage} alt={item.name} />
          <BigButtonStyles onClick={() => addToCart()}>
            Add To Cart
          </BigButtonStyles>
        </div>
        <h4>{item.description}</h4>
        <p>Left In Stock: {item.qty}</p>
      </ShowStyles>
    );
  };

  return item ? loading() : <h1>Loading Item...</h1>;
};

export default Show;
