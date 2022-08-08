import React from "react";
import { Footer, Navbar } from "./components/index";
import { Category, Infos, Landing, Products, Shop } from "./containers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shopping from "./components/Shopping/Shopping";
import Shoes from "./containers/Shoes/Shoes";

const App = () => {
  return (
    <Router>
      <Navbar />
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
