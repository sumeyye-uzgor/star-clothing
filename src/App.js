import React from "react";
import Navbar from "./components/Navbar";
import ProductsContainer from "./components/ProductsContainer";
const App = () => {
  return (
    <div className="font-body">
      <Navbar />
      <div className="flex flex-col min-h-screen container mx-auto items-center py-12">
        <ProductsContainer />
      </div>
    </div>
  );
};

export default App;
