import React from "react";
import tw from "twin.macro";
import img from "../../assets/me.jpg";
import { socials } from "../../utils/config";

const Container = tw.div`w-full md:w-max md:mx-4   sm:max-w-full  flex justify-center  lg:border-red-600 md:border-blue-600 xl:border-green-600 sm:border-yellow-600 sm:border-purple-600`;
const CardContainer = tw.div` md:w-max  w-full mx-4 h-max md:bg-white rounded-2xl  md:px-[20px] xl:px-[40px] py-[30px] flex flex-col md:flex-col sm:flex-row sm:justify-center sm:gap-12 md:gap-0 items-center bg-[rgba(250, 247, 249,0.02)] border-[1px] border-[rgba(250, 247, 249,0.02)]`;
const ImageContainer = tw.div`w-[240px] xl:w-[240px] md:w-[200px]  h-[285px] xl:md:h-[285px] md:h-[240px]  rounded-2xl overflow-hidden`;
const Image = tw.img`w-[240px] md:w-[200px] xl:w-[240px]  h-[285px] xl:md:h-[285px] md:h-[240px]  rounded-2xl overflow-hidden object-cover`;
const NameText = tw.h3`text-center font-bold text-4xl md:text-2xl xl:text-4xl text-white md:text-black mt-6 md:mt-4 xl:mt-6 xl:mb-5 mb-6 md:mb-2 `;
const AboutText = tw.p`text-center mt-[0px] md:mt-[10px] text-lg md:text-base leading-5 md:leading-5 text-[#6B6C6F] w-[230px] font-light`;
const SocialsContainer = tw.div`flex justify-center  md:mt-6 mt-6 gap-5`;
const SocialLink = tw.a``;

function PersonCard() {
  return (
    <Container>
      <CardContainer>
        <ImageContainer>
          <Image src={img} alt="my-image" />
        </ImageContainer>
        <div>
          <NameText>David Kerkez</NameText>
          <AboutText>
            Creative Frontend Developer crafting intuitive and dynamic user
            interfaces with React — detail-oriented, passionate about clean
            code, and driven by seamless user experiences.
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
        </div>
      </CardContainer>
    </Container>
  );
}

export default PersonCard;
