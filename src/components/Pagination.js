import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";
import PaginationStyles from "./styles/PaginationStyles";

const Pagination = (props) => {
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const [itemCount, setItemCount] = React.useState();

  const getCount = async () => {
    const response = await fetch(`${url}/items_count`);
    const data = await response.json();
    await setItemCount(data);
  };

  React.useEffect(() => {
    getCount();
  }, []);

  return (
    <PaginationStyles>
      <Link to="/items">
        Prev
        <img src="arrow-back-outline.svg" alt="forward arrow" />
      </Link>
      <Link to="/items">
        Next
        <img src="arrow-forward-outline.svg" alt="forward arrow" />
      </Link>
    </PaginationStyles>
  );
};

export default Pagination;
