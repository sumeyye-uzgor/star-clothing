import React from "react";
import { ReactComponent as Heart } from "../assets/Heart.svg";
// import { ReactComponent as HeartSolid } from "./assets/HeartSolid.svg";
import { ReactComponent as Basket } from "../assets/Basket.svg";

const ProductCard = ({ product }) => {
  return (
    <div
      className="flex flex-col rounded-[50px] w-[300px] h-80 items-center p-6 bg-cover justify-between text-lg font-semibold text-white hover:text-black"
      style={{ backgroundImage: `url(${product.image})` }}
    >
      <div className="bg-[rgba(0,0,0,0.5)] h-min p-3 rounded-lg text-white hover:opacity-75 cursor-pointer">
        {product.name.toUpperCase()}
      </div>
      <div className="flex flex-row justify-between items-end w-full text-2xl font-normal">
        <div>${product.price}</div>
        <div className="flex flex-col gap-1">
          <Heart width={30} height={30} className="cursor-pointer" />
          <Basket width={30} height={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
