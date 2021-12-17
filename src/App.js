import React from "react";
import Navbar from "./components/Navbar";
import shopData from "./db/ShopData";
import { ReactComponent as Heart } from "./assets/Heart.svg";
// import { ReactComponent as HeartSolid } from "./assets/HeartSolid.svg";
import { ReactComponent as Basket } from "./assets/Basket.svg";
import ProductCard from "./components/ProductCard";
// hover:bg-[rgba(255, 255, 255, 0.5)] hover:text-black
const App = () => {
  return (
    <div className="font-body">
      <Navbar />
      <div className="flex flex-col min-h-screen container mx-auto items-center py-12">
        <div className="w-100 min-h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 auto-cols-min">
          {shopData.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
