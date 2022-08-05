import React from "react";
import { Navbar } from "./components/index";
import { Category, Landing, Products } from "./containers";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Category />
      <Products />
    </div>
  );
};

export default App;
