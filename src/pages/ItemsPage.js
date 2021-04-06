import React from "react";
import Items from "../components/Items";
import Pagination from "../components/Pagination";

const ItemsPage = (props) => {
  return (
    <div>
      <Pagination />
      <Items />
      <Pagination />
    </div>
  );
};

export default ItemsPage;
