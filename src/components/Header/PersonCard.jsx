import React from "react";
import tw from "twin.macro";
import img from "../../assets/me.jpg";
import { socials } from "../../utils/config";

const Container = tw.div`w-full max-w-[400px]  flex justify-center  lg:border-red-600 md:border-blue-600 xl:border-green-600 sm:border-yellow-600 sm:border-purple-600`;
const CardContainer = tw.div` w-[90%] md:w-max h-max rounded-2xl md:px-[52px] py-[30px] flex flex-col items-center bg-[rgba(250, 247, 249,0.02)] border-[1px] border-[rgba(250, 247, 249,0.02)]`;
const ImageContainer = tw.div`w-[240px] h-[285px] rounded-2xl overflow-hidden`;
const Image = tw.img`w-[240px] h-[285px] rounded-2xl overflow-hidden object-cover`;
const NameText = tw.h3`text-center font-bold text-4xl text-white mt-6 mb-6 `;
const AboutText = tw.p`text-center mt-[0px] md:mt-[20px] text-lg leading-5 text-[#6B6C6F] w-[230px] font-light`;
const SocialsContainer = tw.div`flex justify-center  md:my-9 mt-6 gap-5`;
const SocialLink = tw.a``;

function PersonCard() {
  return (
    <Container>
      <CardContainer>
        <ImageContainer>
          <Image src={img} alt="my-image" />
        </ImageContainer>
        <NameText>David Kerkez</NameText>
        <AboutText>
          A Frontend Developer crafting engaging, user-friendly web experiences
          through clean code and creative solutions.
        </AboutText>
        <SocialsContainer>
          {socials.map((item) => {
            const component = item.component;
            return (
              <SocialLink key={item.label} href={item.link} target="_blank">
                {component}
              </SocialLink>
            );
          })}
        </SocialsContainer>
      </CardContainer>
    </Container>
  );
}

export default PersonCard;
