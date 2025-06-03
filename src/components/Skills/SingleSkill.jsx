import React from "react";
import tw from "twin.macro";

const Container = tw.div`   z-10 w-[32.1%] sm:w-[24.2%] md:w-[19.3%] lg:w-[10%] xl:w-[8%]  aspect-square hover:bg-[#45444b] cursor-pointer rounded-md flex bg-[#37363C] flex-col justify-center items-center gap-4 hover:shadow-[inset_0_4px_8px_rgba(0,0,0,0.5)] duration-200 ease-in-out lg:hover:scale-105 border border-transparent lg:hover:border-[#ffffff44]`;
const Image = tw.img`h-[30%]`;
const Text = tw.p`text-[15px] lg:text-[13px] xl:text-[12px] tracking-wide max-w-[90px]  text-center font-[400] leading-4`;

function SingleSkill({ name, img }) {
  return (
    <Container>
      <Image src={img} alt="skill" />
      <Text>{name}</Text>
    </Container>
  );
}

export default SingleSkill;
