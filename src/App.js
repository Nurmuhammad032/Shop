import React from "react";
import { Footer, Navbar, CartItems } from "./components/index";

import { Category, Infos, Landing, Products, Shop } from "./containers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shoes from "./containers/Shoes/Shoes";
import Shoes2 from "./containers/Shoes2/Shoes2";
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
        <Route path="/shoes/:id" element={<Shoes data={shoes} />} />
        {/* <Route path="/shoes-2" element={<Shoes2 />} /> */}
      </Routes>
      
      <Footer />
    </Router>
  );
};
export default App;