import React from "react";
import tw from "twin.macro";
import { highlights } from "../../utils/config";
import RoundedButton from "../Buttons/RoundedButton";
import { ContactIcon, DownloadIcon } from "../../assets/icons/icons";

const Container = tw.div`w-full px-4  mt-5 xl:mt-0 sm:mt-5 md:mt-0 h-full  sm:h-max flex flex-col justify-between   lg:border-red-600 md:border-blue-600 xl:border-green-600 sm:border-yellow-600 sm:border-purple-600`;
const PositionText = tw.p`text-[40px]  sm:text-[60px] xl:text-[80px] font-extrabold uppercase leading-[38px] sm:leading-[55px]  xl:leading-[80px] text-white`;
const PositionTextSpan = tw.span`text-[#807c7d]`;
const AboutText = tw.p` mt-5 text-base xl:text-lg leading-5 xl:leading-6 text-[#d1c9cb] w-[90%] xl:w-[70%]`;
const ButtonsContainer = tw.div`flex gap-4 mb-2 mt-6`;
const HighlightsContainer = tw.div`flex-row flex gap-4 mt-3`;
const HighlightContainer = tw.div`rounded-md p-2.5 `;
const NumberText = tw.p`text-[30px] lg:text-[60px] font-medium `;
const HighlightText = tw.p`uppercase lg:text-base  text-[14px] font-light leading-3`;

function Content() {
  return (
    <Container>
      <PositionText>
        Frontend <br /> <PositionTextSpan>Developer</PositionTextSpan>
      </PositionText>
      <AboutText>
        Passionate and self-motivated junior frontend developer with experience
        in designing and building responsive web solutions. Passionate and
        self-motivated junior frontend developer with experience in designing
        and building responsive web solutions. Passionate and self-motivated
        junior frontend developer with experience in designing and building
        responsive web solutions. Passionate and
      </AboutText>
      <ButtonsContainer>
        <RoundedButton
          label="Download"
          icon={<DownloadIcon color="black" width={15} height={15} />}
        />
        <RoundedButton
          label="Contact"
          icon={<ContactIcon color="black" width={15} height={15} />}
        />
      </ButtonsContainer>
      <HighlightsContainer>
        {highlights.map((item) => {
          return (
            <HighlightContainer
              key={item.label}
              style={{ background: item.bg, color: item.color }}
            >
              <NumberText>+{item.number}</NumberText>
              <HighlightText>{item.label}</HighlightText>
            </HighlightContainer>
          );
        })}
      </HighlightsContainer>
    </Container>
  );
}

export default Content;
