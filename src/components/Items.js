import React from "react";
import { GlobalContext } from "../App";
import ItemsContainer from "../components/styles/ItemsContainer";
import Item from "../components/Item";

const Items = (props) => {
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const [items, setItems] = React.useState([]);

  const getItems = async () => {
    const repsonse = await fetch(`${url}/items`);
    const data = await repsonse.json();
    setItems(data);
  };

  React.useEffect(() => {
    getItems();
  }, []);

  const loaded = () => {
    return (
      <ItemsContainer>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ItemsContainer>
    );
  };

  return items ? loaded() : <h1>getting items...</h1>;
};

export default Items;
