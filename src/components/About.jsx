import React from "react";
import tw from "twin.macro";

const Container = tw.div`px-40 mb-20`;
const Label = tw.h3`text-5xl font-bold`;

function About() {
  return (
    <Container>
      <Label>About me</Label>
      <div className="flex flex-row gap-5 mt-5">
        <div className="w-[300px] h-[1px] bg-white mt-2.5" />
        <p className="w-max font-light pr-20 italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          in iste laudantium perspiciatis corrupti. Dolores incidunt iusto,
          doloribus tempora sint quod eius vitae aut inventore soluta nam neque
          numquam minima? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Reprehenderit in iste laudantium perspiciatis corrupti. Dolores
          incidunt iusto, doloribus tempora sint quod eius vitae aut inventore
          soluta nam neque numquam minima? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Reprehenderit in iste laudantium
          perspiciatis corrupti. Dolores incidunt iusto, doloribus tempora sint
          quod eius vitae aut inventore soluta nam neque numquam minima? soluta
          nam neque numquam minima? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit in iste laudantium perspiciatis
          corrupti. Dolores incidunt iusto, doloribus tempora sint quod eius
          vitae aut inventore soluta nam neque numquam minima?
        </p>
      </div>
    </Container>
  );
}

export default About;
