import React from "react";
import { Link } from "react-router-dom";
import ItemStyles from "../components/styles/ItemStyles";
import SmallButtonStyles from "../components/styles/SmallButtonStyle";

const Item = (props) => {
  const { item } = props;

  return (
    <ItemStyles>
      <SmallButtonStyles>{item.price}</SmallButtonStyles>
      <img src={item.image} alt={item.name} />
      <Link to={`/show/${item.id}`}>
        <h3>{item.name}</h3>
      </Link>
    </ItemStyles>
  );
};

export default Item;
