import React, { useState } from "react";

function Test({ name, color, img }) {
  console.log("here");

  return (
    <div className=" z-10 w-[8%] aspect-square hover:bg-[#45444b] cursor-pointer rounded-md flex bg-[#37363C] flex-col justify-center items-center gap-4 hover:shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] duration-200 ease-in-out hover:scale-105 border border-transparent hover:border-[#ffffff44]">
      <img src={img} alt="" style={{ height: "20%" }} />
      <p className="text-sm tracking-wide ">{name}</p>
    </div>
  );
}

export default Test;
