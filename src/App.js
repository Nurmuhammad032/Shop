import React from "react";
import { Footer, Navbar, CartItems } from "./components/index";
import { Category, Infos, Landing, Products, Shop } from "./containers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Shoes, Collections, ShoesCollection } from "./pages";
import { shoes } from "./components/ShopData/ShopData";

const App = () => {
  return (
    <Router>
      <Navbar />
      <CartItems />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Category />
              <Products />
              <Shop />
              <Infos />
            </>
          }
        />
        <Route path="/shoes-collections/:id" element={<Shoes data={shoes} />} />
        <Route path="/shoes-collections" element={<ShoesCollection />} />
        {/* <Route path="/shoes-2" element={<Shoes2 />} /> */}
      </Routes>
      
      <Footer />
    </Router>
  );
};
export default App;