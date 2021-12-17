import React from "react";
import ProductCard from "./ProductCard";
import shopData from "../db/ShopData";

const ProductsContainer = () => {
  return (
    <div className="w-100 min-h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 auto-cols-min">
      {shopData.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsContainer;
