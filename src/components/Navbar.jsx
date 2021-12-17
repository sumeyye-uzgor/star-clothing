import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white px-28 h-[9opx] shadow-lg w-[100vw] sticky top-0 z-10">
      <div className="mx-auto container flex flex-row items-center justify-between">
        <div className="mx-auto container flex flex-row items-center gap-2">
          <img
            src="https://i.ibb.co/bNCC0GC/shooting-stars.png"
            width="60px"
            height="auto"
            alt="icon"
          />
          <div className=" font-semibold text-2xl">Star's Clothing</div>
        </div>
        <div className=" flex flex-row items-center gap-3 text-lg">
          <div>Favorites</div>
          <div>Contact</div>
          <div className="h-max w-max relative">
            <img
              src="https://image.flaticon.com/icons/png/512/2438/2438133.png"
              alt="cart icon"
              width="40px"
              height="auto"
              className="text-black"
            />
            <div className="absolute top-[11px] left-[13px]">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
