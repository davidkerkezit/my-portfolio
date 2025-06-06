import React from "react";
import test from "../../assets/testimage.png";
import tw from "twin.macro";

const Container = tw.div`border border-orange-300 w-[49%] sm:w-[32.5%] md:w-[23.4%] rounded-md flex items-center h-[700px] justify-center text-white font-bold`;
const Image = tw.img`object-cover w-full h-full blur-sm`;

function SingleProject({ item }) {
  return (
    <Container>
      <img />
    </Container>
  );
}

export default SingleProject;
