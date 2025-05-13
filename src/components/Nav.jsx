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

const Container = styled.nav`
  ${tw`flex bg-[#1E1D1C] gap-8 py-3 w-max mx-auto rounded-2xl px-6 `}
  ${({ $isFixed }) =>
    $isFixed ? tw`fixed top-[15px] left-0 right-0 z-10` : tw`relative `}
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
      {navItems.map(({ name, icon: Icon, id }) => (
        <Button key={id} aria-label={name} className="group">
          <Icon width={24} height={24} />
          <Label>{name}</Label>
        </Button>
      ))}
    </Container>
  );
};
