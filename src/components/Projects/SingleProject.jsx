import React from "react";
import test from "../../assets/projects/musicshop.png";
import tw from "twin.macro";
import { LinkIcon } from "../../assets/icons/icons";

const Container = tw.div`w-[49%] sm:w-[32.5%] md:w-[23.4%] px-4 bg-[#2b2b28] flex flex-col rounded-xl h-[500px] justify-center text-white font-bold`;
const Image = tw.img`object-cover w-full h-full blur-sm`;

function SingleProject({ item }) {
  const { name, description, isAvailable, image, languages } = item;
  return (
    <Container>
      <div className="h-[200px] mt-4 rounded-xl overflow-hidden relative">
        <img
          src={image}
          className={`object-cover w-full h-full transition duration-300 ${
            !isAvailable ? "blur-sm" : ""
          }`}
        />
        {!isAvailable && (
          <div className="w-full h-full bg-black absolute left-0 top-0 opacity-40" />
        )}
      </div>
      <div className=" flex-1 justify-between flex flex-col my-4">
        <h3 className="">{name}</h3>
        <p className="text-sm font-light text-gray-400 line-clamp-6 ">
          {description}
        </p>
        <div className="flex gap-2 bg-[#40403b] w-max px-3 py-1.5 rounded-lg">
          {languages.map((l) => {
            return (
              <img src={l} width={16} height={16} className="object-contain " />
            );
          })}
        </div>
        <button className="flex gap-2 items-center">
          <LinkIcon width={14} />
          <p className="text-[14px]">Visit Project</p>
        </button>
      </div>
    </Container>
  );
}

export default SingleProject;
