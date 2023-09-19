import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import "./App.css";
import { ProductsContextProvider } from "./context/ProductsContext";

function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </ProductsContextProvider>
    </BrowserRouter>
  );
}

export default App;
