import React from "react";
import tw from "twin.macro";
import SingleSkill from "./Skills/SingleSkill";
import { skills } from "../utils/config";

const Container = tw.div`px-40 flex flex-col mt-10 items-center bg-[#1a1a18] pb-20`;
const Label = tw.h3`text-[60px] font-extrabold uppercase leading-[60px] text-white -mt-7 `;
const SkillsContainer = tw.div`mt-16 flex flex-wrap  w-full  justify-center gap-3 text-lg font-semibold`;

function Skills() {
  return (
    <Container>
      <Label>Worked with</Label>
      <SkillsContainer>
        {skills.map(({ name, img }) => {
          return <SingleSkill key={name} name={name} img={img} />;
        })}
      </SkillsContainer>
    </Container>
  );
}

export default Skills;
