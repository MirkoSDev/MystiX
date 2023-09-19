// En el componente Paginator:

import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const Paginator = () => {
  const { totalPage, handleCurrentPage } = useContext(ProductsContext);

  function renderPageNumber() {
    const pageNumber = [];

    for (let i = 1; i <= totalPage; i++) {
      pageNumber.push(
        <li key={i}>
          <button onClick={() => handleCurrentPage(i)}>{i}</button>
        </li>
      );
    }
    return pageNumber;
  }

  return <ul className="pagesButtons">{renderPageNumber()}</ul>;
};

export default Paginator;
