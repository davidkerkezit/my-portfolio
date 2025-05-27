import React from "react";
import { projects } from "../utils/config";
import tw from "twin.macro";
import SingleProject from "./Projects/SingleProject";

const Container = tw.div`h-[100vh] px-40 flex flex-col mt-10`;
const Label = tw.h3`text-[60px] font-extrabold uppercase leading-[60px] text-white`;
const LabelSpan = tw.span`text-[#3B393A]`;
const ProjectsContainer = tw.div`grid grid-cols-4 gap-4 mt-10`;

const Projects = () => {
  return (
    <Container>
      <Label>
        Favorite <br />
        <LabelSpan>Projects</LabelSpan>
      </Label>
      <ProjectsContainer>
        {projects.map((item, index) => (
          <SingleProject key={index} item={item} />
        ))}
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
