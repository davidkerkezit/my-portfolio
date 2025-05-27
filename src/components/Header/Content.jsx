import React from "react";
import tw from "twin.macro";
import { highlights } from "../../utils/config";
import RoundedButton from "../Buttons/RoundedButton";
import { ContactIcon, DownloadIcon } from "../../assets/icons/icons";

const Container = tw.div`w-[60%]  h-full self-start`;
const PositionText = tw.p`text-[110px] font-extrabold uppercase leading-[110px] text-white`;
const PositionTextSpan = tw.span`text-[#3B393A]`;
const AboutText = tw.p` mt-5 text-lg leading-6 text-[#998F8F] w-[70%]`;
const ButtonsContainer = tw.div`flex gap-4 mb-2 mt-6`;
const HighlightsContainer = tw.div`flex-row flex gap-4 mt-10`;
const HighlightContainer = tw.div`rounded-md p-5`;
const NumberText = tw.p`text-[60px] font-medium leading-[60px]`;
const HighlightText = tw.p`uppercase font-light leading-6`;

function Content() {
  return (
    <Container>
      <PositionText>
        Frontend <PositionTextSpan>Developer</PositionTextSpan>
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
