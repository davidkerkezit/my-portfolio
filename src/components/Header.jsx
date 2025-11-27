import React from "react";
import PersonCard from "./Header/PersonCard";
import Content from "./Header/Content";
import tw from "twin.macro";
const Container = tw.div` w-full h-max  flex items-center`;
const InnerContainer = tw.div`w-full  xl:max-w-[1300px] xl:mx-auto md:mt-[70px] mt-2.5 flex md:flex-row flex-col justify-center items-center`;

function Header({ contactRef, aboutRef }) {
  return (
    <Container ref={aboutRef}>
      <InnerContainer>
        <PersonCard />
        <Content contactRef={contactRef} />
      </InnerContainer>
    </Container>
  );
}

export default Header;
