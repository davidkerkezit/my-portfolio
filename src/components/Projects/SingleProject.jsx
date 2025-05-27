import React from "react";
import test from "../../assets/testimage.png";
import tw from "twin.macro";

const Container = tw.div`border border-orange-300  rounded-md flex items-center justify-center text-white font-bold aspect-square bg-gradient-to-tr from-black to-orange-900`;
const Image = tw.img`object-cover w-full h-full blur-sm`;

function SingleProject({ item }) {
  return (
    <Container>
      <Image src={test} alt="project" />
    </Container>
  );
}

export default SingleProject;
