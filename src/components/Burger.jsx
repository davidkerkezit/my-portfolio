import React from "react";

function Burger() {
  return (
    <div className="w-[25px] h-[20px] aspect-square  flex flex-col justify-between z-10 ">
      <div className="w-[25px] h-[2px]  bg-white" />
      <div className="w-[25px] h-[2px]  bg-white" />
      <div className="w-[25px] h-[2px]  bg-white" />
    </div>
  );
}

export default Burger;
