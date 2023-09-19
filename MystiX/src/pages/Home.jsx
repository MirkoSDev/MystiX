import Shop from "../components/Shop";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const Home = () => {
  const { games } = useContext(ProductsContext);
  console.log(games);
  return (
    <>
      <Shop></Shop>
    </>
  );
};

export default Home;
