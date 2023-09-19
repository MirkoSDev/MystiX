import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Card from "./Card";
import Paginator from "./Paginator";

const Shop = () => {
  const { games, totalPage, handleTotalPage, itemsPerPage, currentPage } =
    useContext(ProductsContext);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const enIndex = startIndex + itemsPerPage;
  const gamesToDisplay = games.slice(startIndex, enIndex);

  return (
    <>
      <section className="cardsContainer">
        {gamesToDisplay.map((element) => {
          return <Card key={element.id} game={element}></Card>;
        })}
        <Paginator />
      </section>
    </>
  );
};

export default Shop;
