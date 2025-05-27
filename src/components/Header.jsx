import React from "react";
import PersonCard from "./Header/PersonCard";
import Content from "./Header/Content";
import tw from "twin.macro";

const Container = tw.div`h-[100vh] w-full flex items-center`;
const InnerContainer = tw.div`w-full flex justify-center items-center`;

function Header() {
  return (
    <Container>
      <InnerContainer>
        <PersonCard />
        <Content />
      </InnerContainer>
    </Container>
  );
}

export default Header;
