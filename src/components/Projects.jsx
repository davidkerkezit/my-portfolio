import React from "react";
import { projects } from "../utils/config";
import tw from "twin.macro";
import SingleProject from "./Projects/SingleProject";

const Container = tw.div` mx-4 flex flex-col -mt-8`;
const Label = tw.h3`text-[40px] xl:text-[50px] font-extrabold uppercase leading-[60px] text-white text-center`;
const LabelSpan = tw.span`text-[#3B393A]`;
const ProjectsContainer = tw.div` flex flex-wrap  justify-center items-center w-full gap-1.5 mt-5 `;

const Projects = () => {
  return (
    <Container>
      <Label>Projects</Label>
      <ProjectsContainer>
        {projects.map((item, index) => {
          return <SingleProject key={index} item={item} />;
        })}
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
