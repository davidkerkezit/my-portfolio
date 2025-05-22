import React from "react";
import { ContactIcon, DownloadIcon } from "../../assets/icons/icons";

function Content() {
  const data = [
    {
      number: 2,
      label: "Years of experience",
      bg: "#F46C38",
      color: "#FFFFFF",
    },
    {
      number: 20,
      label: "Projects completed",
      bg: "#C5FF40",
      color: "#35332f",
    },
    // {
    //   number: 20,
    //   label: "Worldwide clients",
    // },
  ];
  const languages = [
    {
      name: "HTML",
      color: "#E76128",
    },
    {
      name: "CSS",
      color: "#2262EA",
    },
    {
      name: "JS",
      color: "#EFD81D",
    },
    {
      name: "TS",
      color: "#3074BF",
    },
    {
      name: "React JS",
      color: "#5ED3F3",
    },
    {
      name: "React Native",
      color: "#5ED3F3",
    },
    {
      name: "Next JS",
      color: "black",
    },
    {
      name: "Astro JS",
      color: "#5F19BA",
    },
    {
      name: "Node JS",
      color: "#6EA460",
    },
    {
      name: "Express JS",
      color: "#EFD81D",
    },
    {
      name: "Mongoose",
      color: "#4CA53F",
    },
    {
      name: "Tailwind",
      color: "#37B7F0",
    },
    {
      name: "Styled",
      color: "#E98ED0",
    },
  ];
  return (
    <div className="w-[60%]  h-full self-start">
      <h1 className="text-[110px] font-extrabold uppercase leading-[110px] text-white">
        Frontend <span className="text-[#3B393A]">Developer</span>
      </h1>
      <p className=" mt-5 text-lg leading-6 text-[#998F8F] w-[70%]">
        Passionate and self-motivated junior frontend developer with experience
        in designing and building responsive web solutions. Passionate and
        self-motivated junior frontend developer with experience in designing
        and building responsive web solutions. Passionate and self-motivated
        junior frontend developer with experience in designing and building
        responsive web solutions. Passionate and
      </p>
      <div className="flex gap-4 mb-2 mt-6">
        <button className=" w-max border border-white text-white bg-[#161616] pl-1 pr-4 py-1 rounded-full flex gap-3 items-center hover:bg-zinc-800 ease-in-out duration-300 ">
          <div className="bg-white  rounded-full  w-8 h-8 flex items-center justify-center">
            <DownloadIcon color="black" width={15} height={15} />
          </div>
          Download
        </button>
        <button className=" w-max border border-white text-white bg-[#161616] pl-1 pr-6 py-1 rounded-full flex gap-3 items-center hover:bg-zinc-800 ease-in-out duration-300 ">
          <div className="bg-white  rounded-full  w-8 h-8 flex items-center justify-center">
            <ContactIcon color="black" width={15} height={15} />
          </div>
          Contact
        </button>
      </div>

      {/* <div className="mt-0">
        <h4 className="text-lg font-extralight text-[#d8d8d8] italic">
          Worked with :
        </h4>
        <div className="flex flex-wrap gap-2 mt-3 w-[80%]">
          {languages.map((l) => {
            return (
              <p
                style={{ borderWidth: 1 }}
                className={`w-max px-4 py-1 rounded-lg border border-[#9e9e9e] text-[#e1e1e1] bg-[#212121] hover:bg-[#2d2d2d] duration-200 ease-in-out cursor-pointer font-light`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = l.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#9e9e9e";
                }}
              >
                {l.name}
              </p>
            );
          })}
        </div>
      </div> */}
      <div className="flex-row flex gap-4 mt-10">
        {data.map((item) => {
          return (
            <div
              key={item.label}
              style={{ background: item.bg, color: item.color }}
              className={`rounded-md p-5`}
            >
              <h3 className="text-[60px] font-medium leading-[60px]">
                +{item.number}
              </h3>
              <p className="uppercase font-light leading-6">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
