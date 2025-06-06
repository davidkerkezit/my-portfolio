import React from "react";
import { LocationIcon } from "../assets/icons/icons";
import tw from "twin.macro";
import { workplaces } from "../utils/config";

const Container = tw.div`flex flex-col  mt-14 bg-[#1a1a18]  px-4  lg:px-24  pb-8`;
const Label = tw.h3`text-[40px] xl:text-[60px] font-extrabold uppercase leading-[60px] text-white mb-4 lg:mb-10 -mt-7`;
const ExperiencesContainer = tw.div`w-full mx-auto`;
const SingleExperienceContainer = tw.div`flex gap-6`;
const DateContainer = tw.div` hidden lg:flex w-[200px]  justify-end`;
const DateText = tw.p`bg-[#70706f]  h-max text-sm font-light py-1 px-3`;
const LineContainer = tw.div`relative`;
const Line = tw.div`h-full w-[1px] bg-white`;
const CircleWrapper = tw.div`aspect-square w-7 absolute -left-[13px] -top-[0px] bg-[#1A1A18] flex justify-center items-center`;
const Circle = tw.div`bg-[#F36C38]  w-3 aspect-square rounded-full`;
const AboutContainer = tw.div`flex flex-col gap-2 max-w-[750px] w-full `;
const PositionText = tw.h4`text-xl font-semibold`;
const LocationContainer = tw.div`flex gap-2 items-center`;
const LocationText = tw.a`text-lg`;
const Description = tw.div`pb-1 font-light w-full `;

const Workplaces = () => {
  return (
    <Container>
      <Label>Experience</Label>
      <ExperiencesContainer>
        {workplaces.map((item) => {
          return (
            <SingleExperienceContainer key={item.location}>
              <DateContainer>
                <DateText>{item.date}</DateText>
              </DateContainer>
              <LineContainer>
                <Line />
                <CircleWrapper>
                  <Circle />
                </CircleWrapper>
              </LineContainer>
              <AboutContainer>
                <PositionText>{item.position}</PositionText>
                <LocationContainer>
                  <LocationIcon color="#eb5b5b" />
                  <LocationText
                    href="https://www.linkedin.com/company/horagames/"
                    target="_blank"
                  >
                    {item.location}
                  </LocationText>
                </LocationContainer>
                <p className="bg-[#70706f] w-max px-3 text-sm py-1 font-light lg:hidden">
                  {item.date}
                </p>

                <Description className="mb-4">{item.description}</Description>
              </AboutContainer>
            </SingleExperienceContainer>
          );
        })}
      </ExperiencesContainer>
    </Container>
  );
};

export default Workplaces;
