import { GithubIcon, GitlabIcon, LinkedinIcon } from "../assets/icons/icons";
// Languages
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
// projects
import musicshop from "../assets/projects/musicshop.png";
import pureaqua from "../assets/projects/pureaqua.png";
import opengamingweb from "../assets/projects/opengamingweb.png";
import opengamingapp from "../assets/projects/opengamingapp.png";
import opengaminggame from "../assets/projects/opengaminggame.png";
import stephero from "../assets/projects/stephero.png";
import horahub from "../assets/projects/horahub.png";
import horaverse from "../assets/projects/horaverse.png";

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

export const projects = [
  {
    name: "Music Shop Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto repellendus maxime accusamus quaerat, nihil ullam quo 
      eum esse atque recusandae culpa odio et dolorem illum, labore aperiam ratione fuga facere?`,
    image: musicshop,
    languages: [next, , tailwind, typescript],
    isAvailable: true,
    link: "https://musicshop-two.vercel.app/",
  },
  {
    name: "Stephero App (IOS)",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto repellendus maxime accusamus quaerat, nihil ullam quo 
      eum esse atque recusandae culpa odio et dolorem illum, labore aperiam ratione fuga facere?`,
    image: stephero,
    languages: [react],
    isAvailable: false,
    link: "",
  },
  {
    name: "Open Gaming (Telegram App)",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto repellendus maxime accusamus quaerat, nihil ullam quo 
      eum esse atque recusandae culpa odio et dolorem illum, labore aperiam ratione fuga facere?`,
    image: opengamingapp,
    languages: [react, tailwind, styled],
    isAvailable: true,
    link: "https://t.me/OGAppBot/app?startapp=5a414e8a3d88",
  },
  {
    name: "OG GO (Telegram Game)",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto repellendus maxime accusamus quaerat, nihil ullam quo 
      eum esse atque recusandae culpa odio et dolorem illum, labore aperiam ratione fuga facere?`,
    image: opengaminggame,
    languages: [react, tailwind, styled],
    isAvailable: true,
    link: "https://t.me/OGAppBot/app?startapp=5a414e8a3d88",
  },
  {
    name: "Pure Aqua Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto repellendus maxime accusamus quaerat, nihil ullam quo 
      eum esse atque recusandae culpa odio et dolorem illum, labore aperiam ratione fuga facere?`,
    image: pureaqua,
    languages: [next, tailwind, typescript],
    isAvailable: true,
    link: "https://pureaqua.rs/",
  },
  {
    name: "Hora Hub Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto repellendus maxime accusamus quaerat, nihil ullam quo 
      eum esse atque recusandae culpa odio et dolorem illum, labore aperiam ratione fuga facere?`,
    image: horahub,
    languages: [react, tailwind, styled],
    isAvailable: false,
    link: "",
  },
  {
    name: "Horaverse Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Iusto repellendus maxime accusamus quaerat, nihil ullam quo 
      eum esse atque recusandae culpa odio et dolorem illum, labore aperiam ratione fuga facere?`,
    image: horaverse,
    languages: [astro, tailwind],
    isAvailable: false,
    link: "",
  },
  {
    name: "Open Gaming Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Iusto repellendus maxime accusamus quaerat, nihil ullam quo 
    eum esse atque recusandae culpa odio et dolorem illum, labore aperiam ratione fuga facere?`,
    image: opengamingweb,
    languages: [astro, tailwind],
    isAvailable: true,
    link: "https://opengaming.network",
  },
];
