import { GithubIcon, GitlabIcon, LinkedinIcon } from "../assets/icons/icons";
import react from "../assets/logos/react.png";
import astro from "../assets/logos/astro.png";
import css from "../assets/logos/css.png";
import javascript from "../assets/logos/javascript.png";
import mongodb from "../assets/logos/mongodb.png";
import node from "../assets/logos/node.png";

import next from "../assets/logos/next.png";
import styled from "../assets/logos/styled.png";
import tailwind from "../assets/logos/tailwind.png";
import typescript from "../assets/logos/typescript.png";

export const socials = [
  {
    label: "Linkedin",
    link: "https://www.linkedin.com/in/davidkerkez/",
    component: <LinkedinIcon color="#F36C38" />,
  },
  {
    label: "Github",
    link: "https://github.com/davidkerkezit",
    component: <GithubIcon color="#F36C38" />,
  },
  {
    label: "Gitlab",
    link: "https://gitlab.com/davidkerkezit",
    component: <GitlabIcon color="#F36C38" />,
  },
];

export const highlights = [
  {
    number: 2,
    label: "Years of experience",
    bg: "#F46C38",
    color: "#FFFFFF",
  },
  {
    number: 20,
    label: "Projects completed",
    bg: "#C5FF40",
    color: "#35332f",
  },
  // {
  //   number: 20,
  //   label: "Worldwide clients",
  // },
];

export const skills = [
  {
    name: "HTML & CSS",
    color: "#2262EA",
    img: css,
  },
  {
    name: "Javascript",
    color: "#EFD81D",
    img: javascript,
  },
  {
    name: "Typescript",
    color: "#3074BF",
    img: typescript,
  },
  {
    name: "React JS",
    color: "#5ED3F3",
    img: react,
  },

  {
    name: "Next JS",
    color: "black",
    img: next,
  },
  {
    name: "Astro JS",
    color: "#5F19BA",
    img: astro,
  },
  {
    name: "React Native",
    color: "#5ED3F3",
    img: react,
  },
  {
    name: "Node & Express JS",
    color: "#EFD81D",
    img: node,
  },
  {
    name: "Mongoose",
    color: "#4CA53F",
    img: mongodb,
  },
  {
    name: "Tailwind",
    color: "#37B7F0",
    img: tailwind,
  },
  {
    name: "Styled",
    color: "#E98ED0",
    img: styled,
  },
];

export const projects = [
  "Horahub",
  "Open Gaming App",
  "OG GO Game ",
  "StepHero App",
  "Musicshop",
  "PureAqua",
  "Horaverse",
  "Horagames",
];

export const workplaces = [
  {
    date: "Mar 2024 - Present",
    position: "Frontend Developer (Full Time)",
    location: "Hora Games",
    link: "https://www.linkedin.com/company/horagames/",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit 
      quasi excepturi amet illum similique sequi quaerat, quod quisquam, ullam sit laborum fugit illo
       necessitatibus atque quia commodi dolorem! Ipsa, mollitia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
       Suscipit quasi excepturi amet illum similique sequi quaerat, quod quisquam, ullam sit laborum fugit illo necessitatibus 
       atque quia commodi dolorem! Ipsa, mollitia? dipisicing elit. Suscipit quasi excepturi amet illum similique sequi quaerat,
        quod quisquam, ullam sit laborum fugit illo necessitatibus atque quia commodi dolorem! Ipsa, mollitia?`,
  },
  {
    date: "Oct 2023 - Nov 2023",
    position: "Frontend Developer (Intermediate)",
    location: "Positive Tech IT",
    link: "https://positivetechit.com/",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit 
      quasi excepturi amet illum similique sequi quaerat, quod quisquam, ullam sit laborum fugit illo
       necessitatibus atque quia commodi dolorem! Ipsa, mollitia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
       Suscipit quasi excepturi amet illum similique sequi quaerat, quod quisquam, ullam sit laborum fugit illo necessitatibus 
       atque quia commodi dolorem! Ipsa, mollitia? dipisicing elit. Suscipit quasi excepturi amet illum similique sequi quaerat,
        quod quisquam, ullam sit laborum fugit illo necessitatibus atque quia commodi dolorem! Ipsa, mollitia?`,
  },
];
