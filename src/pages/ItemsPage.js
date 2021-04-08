import React from "react";
import Items from "../components/Items";
import Pagination from "../components/Pagination";

const ItemsPage = (props) => {
  const page = parseInt(props.match.params.id);
  return (
    <div>
      <Pagination page={page || 1} />
      <Items page={page || 1} />
    </div>
  );
};

export default ItemsPage;
