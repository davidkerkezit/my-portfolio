import React from "react";
import tw from "twin.macro";
import img from "../../assets/me.jpg";
import { socials } from "../../utils/config";

const Container = tw.div`w-[40%] flex justify-end pr-20`;
const CardContainer = tw.div`bg-white w-max h-max rounded-2xl px-[52px] py-[30px] flex flex-col items-center`;
const ImageContainer = tw.div`w-[240px] h-[285px] rounded-2xl overflow-hidden`;
const Image = tw.img`w-[240px] h-[285px] rounded-2xl overflow-hidden object-cover`;
const NameText = tw.h3`text-center font-bold text-4xl text-[#2e2e2e] mt-6 mb-6 `;
const AboutText = tw.p`text-center mt-[20px] text-lg leading-5 text-[#6B6C6F] w-[230px] font-light`;
const SocialsContainer = tw.div`flex justify-center my-9 gap-5`;
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
