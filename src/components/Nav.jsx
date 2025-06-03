import React, { useEffect, useState } from "react";
import {
  BriefcaseIcon,
  ContactIcon,
  HomeIcon,
  ProjectsIcon,
  UserIcon,
} from "../assets/icons/icons";
import tw from "twin.macro";
import styled from "styled-components";
import Burger from "./Burger";

const Container = styled.nav`
  ${tw`flex justify-between  gap-8 py-4 mx-auto  px-5 w-full fixed top-0 z-50 `}
`;

const Button = tw.button`relative flex flex-col items-center text-white`;

const Label = tw.p`
  absolute text-[12px] text-white font-extralight bg-[#2f2e2f] px-2 rounded-md 
  opacity-0 scale-50 translate-y-2 pointer-events-none whitespace-nowrap
  group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-10
  ease-in-out transition-all duration-300 z-10
`;

const navItems = [
  { name: "Home", icon: HomeIcon, id: "nav-home" },
  { name: "About me", icon: UserIcon, id: "nav-about-me" },
  { name: "Projects", icon: ProjectsIcon, id: "nav-projects" },
  { name: "Workplaces", icon: BriefcaseIcon, id: "nav-workplaces" },
  { name: "Contacts", icon: ContactIcon, id: "nav-contacts" },
];

export const Nav = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container $isFixed={isFixed}>
      <div className="absolute w-full h-full bg-[#1e1d1ce9] backdrop-blur-lg  top-0 left-0" />
      <p className="z-10">DK </p>
      <Burger />
      {/* {navItems.map(({ name, icon: Icon, id }) => (
        <Button key={id} aria-label={name} className="group">
          <Icon width={24} height={24} />
          <Label>{name}</Label>
        </Button>
      ))} */}
    </Container>
  );
};
// ${({ $isFixed }) =>
//   $isFixed ? tw`fixed top-[15px] left-0 right-0 z-10` : tw`relative `}
