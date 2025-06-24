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
    description: `Currently, I work as a Frontend Developer at Hora Games, a company based in Novi Sad known for the popular crypto game Crypto Idle Miner. My work focuses on developing a variety of web projects using React and Astro, including a challenging React-based game and application for the Telegram platform inspired by Monopoly Go. This project pushed me to creatively solve complex architectural and gameplay problems. Additionally, I contribute to an iOS app built with React Native that tracks user steps, integrating native features for smooth performance. This role has taught me to write cleaner, more maintainable code, think critically and strategically, and adapt quickly to new challenges. Working in this fast-paced environment has sharpened my problem-solving skills and ability to deliver high-quality, scalable digital experiences.`,
  },
  {
    date: "Oct 2023 - Nov 2023",
    position: "Frontend Developer (Intermediate)",
    location: "Positive Tech IT",
    link: "https://positivetechit.com/",
    description: `During my internship at Positive Tech IT in Novi Sad, I had the opportunity to work on a complex project that allowed me to showcase my skills and grow as a developer. I was assigned to develop a webshop for selling water purifiers using Next.js, TypeScript, GraphQL, and Shopify. This experience gave me hands-on practice with modern technologies and e-commerce development, enhancing my understanding of full-stack workflows and improving my ability to deliver high-quality, maintainable code. The internship was a valuable step in transitioning from self-taught projects to a professional environment, preparing me for real-world challenges`,
  },
];

export const projects = [
  {
    name: "Music Shop Website",
    description: `A full-stack webshop featuring complete user shopping experience with product browsing, purchasing, and customer contact functionality. Built with comprehensive admin panel for product management, order processing, and customer communication. Demonstrates end-to-end e-commerce development skills with both user-facing features and backend administration.`,
    image: musicshop,
    languages: [next, , tailwind, typescript],
    isAvailable: true,
    link: "https://musicshop-two.vercel.app/",
  },
  {
    name: "Stephero App (IOS)",
    description: `
A React Native health application that monitors user activity including steps, distance, and floors climbed. Features gamified challenges and social competition elements to motivate users toward increased physical activity. Integrates native iOS health APIs to provide accurate tracking while creating an engaging, competitive fitness experience.`,
    image: stephero,
    languages: [react],
    isAvailable: false,
    link: "",
  },
  {
    name: "Open Gaming (Telegram App)",
    description: `A React-based Telegram application featuring task-based gameplay connected to partner games and applications. Includes social features like friend connections, point collection systems, integrated chat functionality, and push notifications. Built to create an engaging ecosystem linking multiple gaming platforms within the Telegram environment.`,
    image: opengamingapp,
    languages: [react, tailwind, styled],
    isAvailable: true,
    link: "https://t.me/OGAppBot/app?startapp=5a414e8a3d88",
  },
  {
    name: "OG GO (Telegram Game)",
    description: `React-based mini-game featuring money collection, police evasion, bank heists, and city exploration mechanics. Players progress through different locations while building their criminal empire, with an integrated shop for purchasing upgrades and items. Delivers engaging strategic gameplay optimized for the Telegram platform.`,
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
