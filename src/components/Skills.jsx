import React from "react";
import tw from "twin.macro";
import SingleSkill from "./Skills/SingleSkill";
import { skills } from "../utils/config";

const Container = tw.div` flex flex-col mt-6 items-center bg-[#1a1a18] pb-14 px-4 `;
const Label = tw.h3`text-[40px] xl:text-[50px] font-extrabold uppercase leading-[60px] text-white -mt-8  `;
const SkillsContainer = tw.div`mt-3 flex flex-wrap  w-full  justify-center gap-1.5 text-lg font-semibold `;

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
