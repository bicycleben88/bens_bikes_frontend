import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App";
import PaginationStyles from "./styles/PaginationStyles";

const Pagination = ({ page }) => {
  const { globalState } = React.useContext(GlobalContext);
  const { url } = globalState;
  const [itemCount, setItemCount] = React.useState();
  const perPage = 2;
  const pageCount = Math.ceil(itemCount / perPage);

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
      <Link to={page > 1 && `/items/${page - 1}`}>
        <img src="arrow-back-outline.svg" alt="forward arrow" />
        Prev
      </Link>
      <p>
        {" "}
        Page {page} of {pageCount}
      </p>
      <Link to={page < pageCount && `/items/${page + 1}`}>
        <img src="arrow-forward-outline.svg" alt="forward arrow" />
        Next
      </Link>
    </PaginationStyles>
  );
};

export default Pagination;
