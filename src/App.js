import React from "react";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="font-body">
      <Navbar />
      <div className="flex flex-col min-h-screen text-4xl font-bold container mx-auto ">
        <div className="w-100 min-h-[500px] bg-[#726256] flex flex-col justify-center content-center">
          Hello World
        </div>
      </div>
    </div>
  );
}

export default App;
