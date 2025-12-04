import React from "react";
import tw from "twin.macro";
import { highlights } from "../../utils/config";
import RoundedButton from "../Buttons/RoundedButton";
import { ContactIcon, DownloadIcon } from "../../assets/icons/icons";
import BlurText from "../../ReactBits/BlurText";

const Container = tw.div`w-full px-4  mt-5 xl:mt-0 sm:mt-5 md:mt-0 h-full  sm:h-max flex flex-col justify-between   lg:border-red-600 md:border-blue-600 xl:border-green-600 sm:border-yellow-600 sm:border-purple-600`;
const PositionText = tw.p`text-[40px]  sm:text-[60px] xl:text-[80px] font-extrabold uppercase leading-[38px] sm:leading-[55px]  xl:leading-[80px] text-white`;
const PositionTextSpan = tw.span`text-[#807c7d]`;
const AboutText = tw.p` mt-5 text-base xl:text-lg leading-5 xl:leading-6 text-[#d1c9cb] w-[90%] xl:w-[70%]`;
const ButtonsContainer = tw.div`flex gap-4 mb-2 mt-6`;
const HighlightsContainer = tw.div`flex-row flex gap-4 mt-3`;
const HighlightContainer = tw.div`rounded-md p-2.5 `;
const NumberText = tw.p`text-[30px] lg:text-[60px] font-medium `;
const HighlightText = tw.p`uppercase lg:text-base  text-[14px] font-light leading-3`;

function Content({ contactRef }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/DavidKerkez_CV.pdf";
    link.download = "DavidKerkez_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container>
      <BlurText
        text="Frontend"
        delay={0.15}
        lineDelay={0}
        animateBy="words"
        direction="top"
        className="text-[40px] sm:text-[60px] xl:text-[80px] font-extrabold uppercase leading-[38px] sm:leading-[55px] xl:leading-[80px] text-white block mb-2"
      />

      <BlurText
        text="Developer"
        delay={0.15}
        animateBy="words"
        lineDelay={0.2}
        direction="top"
        className="text-[40px] sm:text-[60px] xl:text-[80px] font-extrabold uppercase leading-[38px] sm:leading-[55px] xl:leading-[80px] text-[#807c7d] block"
      />

      <AboutText>
        I'm a self-driven Frontend Developer with a passion for both visual
        design and technical logic. While React is my core tool, I’m always
        ready to dive into new technologies — from frameworks like Next.js to
        mobile apps with React Native, or backend tasks with Express. I've
        worked on a wide range of projects, from websites and apps to games,
        always adapting fast and delivering clean, effective solutions. My goal
        is to build not just beautiful, but smart and scalable digital
        experiences.{" "}
      </AboutText>
      <ButtonsContainer>
        <RoundedButton
          label="Download"
          icon={<DownloadIcon color="black" width={15} height={15} />}
          func={handleDownload}
        />
        <RoundedButton
          label="Contact"
          icon={<ContactIcon color="black" width={15} height={15} />}
          func={() => {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
          }}
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
