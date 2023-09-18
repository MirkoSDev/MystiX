import Header from "../components/Header";
import Footer from "../components/Footer";
import Shop from "../components/Shop";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const Home = () => {
  const { games } = useContext(ProductsContext);
  console.log(games);
  return (
    <>
      <Header></Header>
      <Shop></Shop>
      <Footer></Footer>
    </>
  );
};

export default Home;
