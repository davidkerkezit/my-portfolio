import React, { useState } from "react";
import react from "../assets/logos/react.png";
import astro from "../assets/logos/astro.png";
import css from "../assets/logos/css.png";
import javascript from "../assets/logos/javascript.png";
import mongodb from "../assets/logos/mongodb.png";
import node from "../assets/logos/node.png";

import next from "../assets/logos/next.png";
import styled from "../assets/logos/styled.png";
import tailwind from "../assets/logos/tailwind.png";
import typescript from "../assets/logos/typescript.png";
import Test from "./Test";

function Skills() {
  const languages = [
    {
      name: "HTML & CSS",
      color: "#2262EA",
      img: css,
    },
    {
      name: "Javascript",
      color: "#EFD81D",
      img: javascript,
    },
    {
      name: "Typescript",
      color: "#3074BF",
      img: typescript,
    },
    {
      name: "React JS",
      color: "#5ED3F3",
      img: react,
    },

    {
      name: "Next JS",
      color: "black",
      img: next,
    },
    {
      name: "Astro JS",
      color: "#5F19BA",
      img: astro,
    },
    {
      name: "React Native",
      color: "#5ED3F3",
      img: react,
    },
    {
      name: "Node & Express JS",
      color: "#EFD81D",
      img: node,
    },
    {
      name: "Mongoose",
      color: "#4CA53F",
      img: mongodb,
    },
    {
      name: "Tailwind",
      color: "#37B7F0",
      img: tailwind,
    },
    {
      name: "Styled",
      color: "#E98ED0",
      img: styled,
    },
  ];

  return (
    <div className="  px-40 flex flex-col mt-10 items-center">
      <h1 className="text-[60px] font-extrabold uppercase leading-[60px] text-white ">
        Worked with
      </h1>
      <div className="mt-16 flex flex-wrap  w-full  justify-center   gap-3 text-lg font-semibold  ">
        {languages.map(({ name, color, img }) => {
          return <Test key={name} name={name} color={color} img={img} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
