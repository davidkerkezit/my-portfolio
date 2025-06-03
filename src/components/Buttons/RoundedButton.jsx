import React from "react";
import tw from "twin.macro";

const Button = tw.button`w-max border border-white text-white bg-[#161616] pl-[2px] pr-4 py-[2px] md:py-0.5 rounded-full flex gap-3 items-center hover:bg-zinc-800 ease-in-out duration-300 `;
const IconWrapper = tw.div`bg-white  rounded-full  w-8 h-8 flex items-center justify-center`;
const LabelText = tw.p`text-sm`;

function RoundedButton({ label, icon }) {
  return (
    <Button>
      <IconWrapper>{icon}</IconWrapper>
      <LabelText>{label}</LabelText>
    </Button>
  );
}

export default RoundedButton;
