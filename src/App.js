import React from "react";
import { Footer, Navbar, CartItems, ScrollTop } from "./components/index";
import { Category, Infos, Landing, Products, Shop } from "./containers";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  Shoes,
  ShoesCollection,
  DressCollection,
  Dress,
  NotFound,
} from "./pages";
import { shoes, dresses } from "./components/ShopData/ShopData";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollTop />
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
        <Route
          path="/dresses-collections/:id"
          element={<Dress data={dresses} />}
        />
        <Route path="/shoes-collections" element={<ShoesCollection />} />
        <Route path="/dresses-collections" element={<DressCollection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
};
export default App;
