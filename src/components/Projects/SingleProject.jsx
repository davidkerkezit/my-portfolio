import React from "react";
import tw from "twin.macro";
import { LinkIcon, RocketIcon } from "../../assets/icons/icons";

const Container = tw.div`w-[100%] sm:w-[47.5%] md:w-[32.4%] xl:w-[23.8%] lg:w-[31%] sm:px-4 py-2 sm:py-4 px-2 bg-[#2b2b28] gap-4 md:gap-2 sm:h-[440px] md:h-[430px] flex flex-row sm:flex-col rounded-xl h-max justify-center text-white font-bold`;
const Image = tw.img`object-cover w-full h-full blur-sm`;

function SingleProject({ item }) {
  const { name, description, isAvailable, image, languages, link } = item;
  const openLinkHandler = () => {
    window.open(link, "_blank");
  };
  return (
    <Container>
      <div className="h-[200px] sm:h-[180px] lg:h-[200px] w-[35%] sm:w-full   rounded-xl overflow-hidden relative">
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
      <div className=" flex-1 justify-between flex flex-col  ">
        <h3 className="">{name}</h3>
        <p className="text-sm font-light text-gray-400 line-clamp-4 ">
          {description}
        </p>
        <div className="flex gap-2 bg-[#40403b] w-max px-3 py-1.5 rounded-lg">
          {languages.map((l) => {
            return (
              <img src={l} width={16} height={16} className="object-contain " />
            );
          })}
        </div>
        {isAvailable ? (
          <button
            disabled={!isAvailable}
            className="flex gap-2 items-center"
            onClick={openLinkHandler}
          >
            <LinkIcon width={14} />
            <p className="text-[14px]">Visit Project</p>
          </button>
        ) : (
          <div className="flex items-center gap-2 text-[14px] text-gray-400">
            <RocketIcon width={16} height={16} />
            Soon
          </div>
        )}
      </div>
    </Container>
  );
}

export default SingleProject;
