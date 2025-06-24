import React from "react";
import tw from "twin.macro";

const Container = tw.div`px-0 mb-5 mt-6 mx-4 lg:mx-10 xl:mx-24`;
const Label = tw.h3`text-[40px] xl:text-[50px] font-bold`;

function About() {
  return (
    <Container>
      <Label>About me</Label>
      <div className="flex flex-row gap-4 mt-1.5 ">
        <div className="w-[300px] hidden md:block h-[1px] bg-white mt-2.5" />
        <p className="w-max font-light  italic ">
          Hi, I'm David — a Frontend Developer from Novi Sad, Serbia, with a
          unique background in music and tech. Before diving into code, I spent
          a decade working as a DJ and music producer, where creativity, quick
          thinking, and understanding people’s needs were essential. That same
          creative drive led me to frontend development, where I now craft user
          interfaces that are both beautiful and functional. I taught myself how
          to code, deepened that knowledge through formal training, and
          challenged myself with projects that advanced my skills significantly
          — including a full-stack webshop I built from scratch. Since then,
          I’ve worked on diverse projects where I’m constantly adapting,
          learning fast, and delivering smart solutions. I thrive in
          environments where creativity meets logic, and where every challenge
          is an opportunity to grow.
        </p>
      </div>
    </Container>
  );
}

export default About;
