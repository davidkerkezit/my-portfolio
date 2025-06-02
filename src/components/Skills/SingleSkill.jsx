import React from "react";
import tw from "twin.macro";

const Container = tw.div`   z-10 w-[30%] aspect-square hover:bg-[#45444b] cursor-pointer rounded-md flex bg-[#37363C] flex-col justify-center items-center gap-3 hover:shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] duration-200 ease-in-out hover:scale-105 border border-transparent hover:border-[#ffffff44]`;
const Image = tw.img`h-[30%]`;
const Text = tw.p`text-sm tracking-wide max-w-[90px]  text-center`;

function SingleSkill({ name, img }) {
  return (
    <Container>
      <Image src={img} alt="skill" />
      <Text>{name}</Text>
    </Container>
  );
}

export default SingleSkill;
