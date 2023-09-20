import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Card from "./Card";
import Paginator from "./Paginator";
import Alphabetic from "../assets/Alphabetic.svg";
import Numeric from "../assets/Numeric.svg";
import SearchBar from "./SearchBar";

const Shop = () => {
  
  const { games, totalPage, handleTotalPage, itemsPerPage, currentPage } =
    useContext(ProductsContext);

  const [sortedGames, setSortedGames] = useState([]);

  useEffect(() => {
    const storedSortedGames = sessionStorage.getItem("sortedGames");
    if (storedSortedGames) {
      setSortedGames(JSON.parse(storedSortedGames));
    } else {
      setSortedGames(games);
    }
  }, [games]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const gamesToDisplay = sortedGames.slice(startIndex, endIndex);

  const handleSort = () => {
    const sortedByTitle = [...games].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedGames(sortedByTitle);

    sessionStorage.setItem("sortedGames", JSON.stringify(sortedByTitle));
  };

  const handleOrdenarPorMetacritic = () => {
    const sortedByMetacritic = [...games].sort(
      (a, b) => b.metacritic - a.metacritic
    );
    setSortedGames(sortedByMetacritic);

    sessionStorage.setItem("sortedGames", JSON.stringify(sortedByMetacritic));
  };

const [searchText, setSearchText] = useState('');
  return (
    <>
      <SearchBar setSearchText={setSearchText}/>
      <div className="OrderButtCont">
        <button className="OrderButt" onClick={handleSort}>
          <img src={Alphabetic} alt="Ordenar alfabeticamente" />
        </button>
        <button className="OrderButt" onClick={handleOrdenarPorMetacritic}>
          <img src={Numeric} alt="Ordenar por calificacion de metacritic" />
        </button>
      </div>
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
