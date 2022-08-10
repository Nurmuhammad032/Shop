import React from "react";
import { Footer, Navbar, CartItems } from "./components/index";
import { Category, Infos, Landing, Products, Shop } from "./containers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shoes from "./containers/Shoes/Shoes";

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
        <Route path="/shoes" element={<Shoes />} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
