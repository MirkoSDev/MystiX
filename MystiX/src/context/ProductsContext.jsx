import { createContext, useEffect, useState } from "react";

import { initialProduct } from "../services/initialProduct";
import { getAllProducts } from "../services/productService";

export const ProductsContext = createContext([initialProduct]);

export const ProductsContextProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  const fetchData = async () => {
    const data = await getAllProducts();
    setGames(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = { games };
  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
