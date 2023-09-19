// En el componente ProductsContext:

import { createContext, useEffect, useState } from "react";
import { initialProduct } from "../services/initialProduct";
import { getAllProducts } from "../services/productService";

export const ProductsContext = createContext(initialProduct);

function calcPages(total, recordsPerPage) {
  return Math.ceil(total / recordsPerPage);
}

export const ProductsContextProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handleCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const handleTotalPage = (page) => {
    setTotalPage(page);
  };

  const fetchData = async () => {
    const data = await getAllProducts();
    const totalPages = calcPages(data.length, itemsPerPage); // Calcula el total de páginas correctamente
    setTotalPage(totalPages); // Establece el total de páginas
    setGames(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = {
    games,
    totalPage,
    handleTotalPage,
    itemsPerPage,
    currentPage,
    handleCurrentPage,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
