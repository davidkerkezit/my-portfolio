import React from "react";

const Workplaces = () => {
  const array = [
    "Horahub",
    "Open Gaming App",
    "OG GO Game ",
    "StepHero App",
    "Musicshop",
    "PureAqua",
    "Horaverse",
    "Horagames",
  ];
  return (
    <div className=" h-[100vh] px-40 flex flex-col mt-10">
      <h1 className="text-[60px] font-extrabold uppercase leading-[60px] text-white">
        Workplaces <br />
      </h1>
      {/* <div className="grid grid-cols-4 gap-4 mt-10">
        {array.map((item, index) => (
          <div
            key={index}
            className="border border-orange-300  rounded-md flex items-center justify-center text-white font-bold aspect-square bg-gradient-to-tr from-black to-orange-900"
          >
            {item}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Workplaces;
