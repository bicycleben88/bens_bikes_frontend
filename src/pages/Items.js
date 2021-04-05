import React from "react";
import Carousel from "react-image-carousel";
import ItemsContainer from "../components/styles/ItemsContainer";
import { GlobalContext } from "../App";
import Item from "../components/Item";
import Pagination from "../components/Pagination";

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
      <div>
        <Pagination />
        <ItemsContainer>
          {items.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ItemsContainer>
        <Pagination />
      </div>
    );
  };

  return Items.length > 0 ? loaded() : <h3>getting items...</h3>;
};

export default Items;
