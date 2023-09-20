import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Card from "./Card";
import Paginator from "./Paginator";
import SearchBar from "./SearchBar";


const Shop = () => {
  const { games, totalPage, handleTotalPage, itemsPerPage, currentPage } =
    useContext(ProductsContext);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const enIndex = startIndex + itemsPerPage;
  const gamesToDisplay = games.slice(startIndex, enIndex);

const [searchText, setSearchText] = useState('');
  return (
    <>
         <SearchBar setSearchText={setSearchText}/>
      <section className="cardsContainer">
        {gamesToDisplay.filter((game)=> game.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())).map((element) => {
          return <Card key={element.id} game={element}></Card>;
        })}
        <Paginator />
      </section>
        
    </>
  );
};

export default Shop;
