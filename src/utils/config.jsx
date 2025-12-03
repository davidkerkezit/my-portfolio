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
import awss3 from "../assets/logos/awss3.png";
import redux from "../assets/logos/redux.png";
import framermotion from "../assets/logos/framermotion.png";
import emailjs from "../assets/logos/emailjs.png";
import watermelondb from "../assets/logos/watermelondb.png";
import zustand from "../assets/logos/zustand.png";
import graphql from "../assets/logos/graphql.png";

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
    date: "Mar 2024 - Dec 2025",
    position: "Frontend Developer (Full Time)",
    location: "Hora Games",
    link: "https://www.linkedin.com/company/horagames/",
    description: `I worked as a Frontend Developer at Hora Games, a company based in Novi Sad known for the popular crypto game Crypto Idle Miner. My work focused on developing a variety of web projects using React and Astro, including a challenging React-based game and application for the Telegram platform inspired by Monopoly Go. This project pushed me to creatively solve complex architectural and gameplay problems. Additionally, I contributed to an iOS app built with React Native that tracked user steps, integrating native features for smooth performance. This role taught me to write cleaner, more maintainable code, think critically and strategically, and adapt quickly to new challenges. Working in this fast-paced environment sharpened my problem-solving skills and my ability to deliver high-quality, scalable digital experiences.`,
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
    id: 1,
    name: "Music Shop Website",
    description: `Music Shop is a full-stack e-commerce platform developed as a showcase of the skills I gained during my two-month internship at Positive Tech in Novi Sad. This project demonstrates my ability to independently design, structure, and build complex web applications while delivering real-world functionality for both users and administrators.`,
    image: musicshop,
    languages: [
      {
        label: "Next.js",
        img: next,
        height: 20,
      },
      {
        label: "Typescript",
        img: typescript,
        height: 20,
      },
      {
        label: "Mongoose",
        img: mongodb,
        height: 25,
      },
      {
        label: "AWS S3",
        img: awss3,
        height: 20,
      },
      {
        label: "Rest API",
        img: null,
        height: 16,
      },
      {
        label: "Tailwind CSS",
        img: tailwind,
        height: 16,
      },
      {
        label: "Redux",
        img: redux,
        height: 20,
      },
      {
        label: "Framer Motion",
        img: framermotion,
        height: 20,
      },
      {
        label: "EmailjS",
        img: emailjs,
        height: 16,
      },
    ],
    isAvailable: true,
    link: "https://musicshop-two.vercel.app/",
    floatAnimTime: 200,
    customComponent: (
      <div>
        <div className="text-white text-md font-light   sm:px-[56px] md:px-20 text-center sm:text-left ">
          <br />
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38] block "
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Shop, Searching, Sorting, Wishlist & Cart
          </span>
          <br />
          <br />
          Customers can browse all available products, filter by category, and
          sort by price or posting date. A search functionality enables detailed
          product lookup. Users can add items to their cart or wishlist, adjust
          quantities based on real-time product availability, remove individual
          items, or clear the entire cart.
          <br />
          <br />
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38] block "
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Dashboard (Add, Delete, Edit Products, Orders, Newsletter, Messages)
          </span>
          <br />
          <br /> The admin dashboard implements all HTTP methods (POST, DELETE,
          PATCH, GET), allowing administrators to manage products (add, edit,
          remove), monitor and process orders, and mark them as completed. The
          newsletter section enables sending updates via EmailJS and responding
          to user inquiries submitted through the contact form.
          <br />
          <br />
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38] block "
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Contact Form & Newsletter
          </span>
          <br />
          <br />
          Users can reach out via an integrated contact form that leverages
          EmailJS to send messages directly to the store’s email. In addition,
          all contact form submissions are stored in the database using
          Mongoose. The subscription form allows users to subscribe to the
          newsletter to receive the latest updates, with emails also recorded in
          the database.
          <div className="w-full h-[0.1px]  bg-white/20 my-4" />
          To showcase my full potential gained during the internship, I used
          modern and in-demand technologies. The platform is built with{" "}
          <span className="font-semibold text-orange-400">Next.js </span>
          and <span className="font-semibold text-orange-400">Typescript </span>
          for type safety,
          <span className="font-semibold text-orange-400"> Tailwind CSS </span>
          for styling,
          <span className="font-semibold text-orange-400"> Redux </span>
          for global state management and{" "}
          <span className="font-semibold text-orange-400">
            Framer Motion{" "}
          </span>{" "}
          for animations.{" "}
          <span className="font-semibold text-orange-400">Email JS </span>{" "}
          handles email communication, while{" "}
          <span className="font-semibold text-orange-400">Mongoose </span> is
          used for the backend, and{" "}
          <span className="font-semibold text-orange-400">AWS S3 </span> serves
          for image storage.
          <div className="w-full h-[0.1px]  bg-white/20 my-4" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: "Stephero App (IOS)",
    description: `StepHero is a React Native (Expo) application for iOS and Android that tracks user activity — steps, distance, and floors — and transforms daily movement into an engaging, gamified experience. The app combines accurate native data collection with a performant local storage strategy to deliver fast historical views (days → years) and smooth live updates.
`,
    image: stephero,
    languages: [
      {
        label: "React Native",
        img: react,
        height: 20,
      },
      {
        label: "WatermelonDB",
        img: watermelondb,
        height: 20,
      },
      {
        label: "Zustand",
        img: zustand,
        height: 20,
      },

      {
        label: "Reanimated",
        img: null,
        height: 16,
      },
    ],
    isAvailable: false,
    link: "",
    floatAnimTime: 400,
    customComponent: (
      <div>
        <div className="text-white text-md font-light   sm:px-[56px] md:px-20 text-center sm:text-left ">
          <br />
          {/* iOS Integration */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38] block"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            iOS Integration
          </span>
          <br />
          <br />
          We use HealthKit to retrieve and process activity data on iOS. After
          obtaining permissions, we clean manually entered values, group data by
          day, and store everything in WatermelonDB for faster loading. Today's
          values are taken from Expo Pedometer due to HealthKit’s caching delay,
          ensuring live and accurate tracking.
          <br />
          <br />
          {/* Android Integration */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38] block"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Android Integration
          </span>
          <br />
          <br />
          On Android devices, we detect whether the user has Google Fit or
          Health Connect installed. After linking the selected service, data is
          synced, structured, and stored in WatermelonDB following the same
          approach as on iOS.
          <br />
          <br />
          {/* Live Tracking */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38] block"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Live Tracking, Averages & Best Results
          </span>
          <br />
          <br />
          The main screen displays live steps, distance, and floors. Steps are
          updated through Expo Pedometer, while distance is calculated using
          average step length. We generate weekly, monthly, yearly, and lifetime
          averages, as well as best personal results. Week-start differences
          between EU and US regions required custom logic.
          <br />
          <br />
          {/* History */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38] block"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            History (Bars & Table)
          </span>
          <br />
          <br />
          Users can view their history as bar charts or as a table. Lazy loading
          ensures smooth performance by avoiding rendering thousands of days at
          once. A dynamic daily-goal line adapts based on the previous day’s
          results, motivating users to stay active.
          <br />
          <br />
          {/* Gaming Section */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38] block"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Gaming Section (Journeys, Tasks, Snaps)
          </span>
          <br />
          <br />
          To make progress more engaging, the app includes a gaming system with
          themed Journeys. Each journey has a required distance and time limit.
          As users walk in real life, their character moves across a map,
          reaches checkpoints, and collects rewards (cash & snaps). Completed
          journeys appear in the History section, where users can share their
          achievements. Snaps are grouped by continents to encourage full
          collection.
          <br />
          <br />
          {/* WatermelonDB */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38] block"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Local Storage (WatermelonDB)
          </span>
          <br />
          <br />
          WatermelonDB is used for all local storage, including daily stats,
          averages, best scores, user settings, journeys, and snaps. It ensures
          instant access, smooth performance, and full offline support.
          <br />
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
          {/* Retrospective */}
          Although I had no previous{" "}
          <span className="font-semibold text-orange-400">
            React Native
          </span>{" "}
          experience, my{" "}
          <span className="font-semibold text-orange-400">React</span>{" "}
          background helped me adapt quickly. I used{" "}
          <span className="font-semibold text-orange-400">Zustand</span> for
          global state,
          <span className="font-semibold text-orange-400"> Reanimated</span> for
          animations, and{" "}
          <span className="font-semibold text-orange-400">WatermelonDB</span>{" "}
          for high-performance storage. The project runs on the latest versions
          of React Native and Expo, which benefits from the new architecture
          with no bridge. A future step is adding
          <span className="font-semibold text-orange-400">
            {" "}
            MongoDB
          </span> and{" "}
          <span className="font-semibold text-orange-400">Mongoose </span> for
          server-side insights.
          <br />
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Open Gaming (Telegram App)",
    description: `Open Gaming is a Telegram-based application built with React that offers task-driven gameplay connected to both our own and partner games/applications. Users can earn points and rewards (drops) by entering daily codes, completing tasks, and progressing through various levels.`,
    image: opengamingapp,
    languages: [
      {
        label: "React",
        img: react,
        height: 20,
      },
      {
        label: "Redux",
        img: redux,
        height: 20,
      },
      {
        label: "Tailwind CSS",
        img: tailwind,
        height: 16,
      },
      {
        label: "CSS Modules",
        img: null,
        height: 20,
      },
    ],
    isAvailable: true,
    link: "https://t.me/OGAppBot/app?startapp=5a414e8a3d88",
    floatAnimTime: 400,
    customComponent: (
      <div>
        <div className="text-white text-md font-light   sm:px-[56px] md:px-20 text-center sm:text-left ">
          <br />
          {/* Drops & Grades */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38]"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Drops & Grades
          </span>
          <br />
          <br />
          Users earn drops over time through a top progress bar that fills
          automatically. Drops can be collected once the bar is full. As users
          accumulate more drops, they progress through multiple levels (grades),
          unlocking new features and rewards. Drops can later be used inside the
          platform for different actions and benefits.
          <br />
          <br />
          {/* Tasks, Friends, Chat */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38]"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Tasks, Friends & Chat
          </span>
          <br />
          <br />
          The tasks section allows users to earn drops, rolls, and cash by
          completing various missions such as following partner channels,
          entering daily codes from our Crypto Idle Miner game, and finishing
          challenges related to OG GO. Users can also invite friends using their
          personal link and receive drops as a reward. The chat section is
          hardcoded and provides quick answers to frequently asked questions
          about the platform.
          {/* Overal Overview */}
          <br />
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
          After working on various website projects, this one presented a new
          type of challenge — a unique concept with a different way of thinking.
          The project is built using{" "}
          <span className="font-semibold text-orange-400"> React JS</span>, with
          styling handled through{" "}
          <span className="font-semibold text-orange-400"> Tailwind CSS</span>{" "}
          in combination with{" "}
          <span className="font-semibold text-orange-400"> CSS Modules </span>
          for cleaner and organized code.{" "}
          <span className="font-semibold text-orange-400"> Redux</span> is used
          for global state management. Although backend was not my primary
          responsibility, I contributed improvements to both the tasks and
          friends sections.
          <br />
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    name: "OG GO (Telegram Game)",
    description: `OG GO (Telegram Game) is a web-based game developed for the Telegram platform, integrated with our Open Gaming ecosystem. Inspired by Monopoly Go, it features a retro board game experience where players roll two dice, collect or lose money, and encounter special tiles that trigger mini-games such as police chases, bank heists, prison escapes, spin wheels, and surprise events.
`,
    image: opengaminggame,
    languages: [
      {
        label: "React",
        img: react,
        height: 20,
      },
      {
        label: "Redux",
        img: redux,
        height: 20,
      },
      {
        label: "Tailwind CSS",
        img: tailwind,
        height: 16,
      },
      {
        label: "Styled",
        img: styled,
        height: 20,
      },
      {
        label: "Twin.macro",
        img: null,
        height: 20,
      },
    ],
    isAvailable: true,
    link: "https://t.me/OGAppBot/app?startapp=5a414e8a3d88",
    floatAnimTime: 400,
    customComponent: (
      <div>
        <div className="text-white text-md font-light   sm:px-[56px] md:px-20 text-center sm:text-left ">
          <br />
          {/* Board, Multiplier, Dices */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38]"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Board, Multiplier & Dices
          </span>
          <br />
          <br />
          The main screen features a retro-style board filled with tiles that
          award or remove cash, trigger mini-games, or activate special events.
          Players choose a multiplier that affects the amount of cash they gain,
          then roll two dice to move their character across the board.
          <br />
          <br />
          {/* Mini Games */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38]"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Mini Games
          </span>
          <br />
          <br />
          Landing on a mini-game tile triggers an animated transition that takes
          the player into one of several interactive challenges:
          <br />
          <div className="pl-2">
            •{" "}
            <span className="font-semibold text-orange-400">
              Spin the Wheel
            </span>{" "}
            — Spin to earn cash, extra rolls, a wheel re-spin, or a shortcut to
            another mini-game.
            <br />•{" "}
            <span className="font-semibold text-orange-400">
              Police Escape
            </span>{" "}
            — You have three chances to roll matching dice to escape. Failure
            results in being sent to jail.
            <br /> •{" "}
            <span className="font-semibold text-orange-400">Bank Heist</span> —
            Break into a bank while a timer increases your cash. Press the
            button to secure your loot. Wait too long and police arrive —
            sending you to jail. <br />•{" "}
            <span className="font-semibold text-orange-400">Jail Escape</span> —
            After being arrested, choose between three escape routes (window,
            stairs, chimney). A correct choice frees you; otherwise, you must
            pay bail.
            <br /> •{" "}
            <span className="font-semibold text-orange-400">Card Reveal</span> —
            A classic matching game where players flip cards in an attempt to
            find three identical symbols. <br />•{" "}
            <span className="font-semibold text-orange-400">Car Race</span> —
            Race against other Telegram players; the winner takes the bigger
            cash reward.
          </div>
          <br />
          <br />
          {/* Build & Shop */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38]"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Build & Shop
          </span>
          <br />
          <br />
          In the Build section, players can spend their accumulated cash to
          unlock new cities, progress to higher levels, and explore updated
          boards with boosted rewards. The Shop section allows players to
          purchase additional rolls using Telegram Stars.
          {/* Project Overview */}
          <br />
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
          Building an entire game in{" "}
          <span className="font-semibold text-orange-400"> React.js</span> was a
          unique challenge, especially designing smooth transitions between
          screens and creating an interactive board-game feel within a web
          environment. Styling was implemented using{" "}
          <span className="font-semibold text-orange-400"> Tailwind CSS</span>{" "}
          combined with
          <span className="font-semibold text-orange-400">
            {" "}
            Styled Components
          </span>{" "}
          and <span className="font-semibold text-orange-400">
            {" "}
            Twin.macro
          </span>{" "}
          for cleaner structure.{" "}
          <span className="font-semibold text-orange-400"> Redux</span> handled
          all global state management and game logic.
          <br />
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
        </div>
      </div>
    ),
  },
  {
    id: 5,
    name: "Pure Aqua Website",
    description: `       Pure Aqua is a modern e-commerce platform built as a headless solution using Shopify as the backend and Next.js + TypeScript on the frontend. During my internship at Positive Tech, my task was to continue an already initiated project and implement the Home, Blog, Shop, and About pages. This included connecting Shopify products through GraphQL, handling cart logic, and ensuring seamless communication between the frontend and the Shopify API.`,
    image: pureaqua,
    languages: [
      {
        label: "Next.js",
        img: next,
        height: 20,
      },
      {
        label: "Typescript",
        img: typescript,
        height: 20,
      },
      {
        label: "GraphQL",
        img: graphql,
        height: 20,
      },
      {
        label: "Tailwind CSS",
        img: tailwind,
        height: 16,
      },
      {
        label: "Redux",
        img: redux,
        height: 20,
      },
    ],
    isAvailable: true,
    link: "https://pureaqua.rs/",
    floatAnimTime: 400,
    customComponent: (
      <div>
        <div className="text-white text-md font-light   sm:px-[56px] md:px-20 text-center sm:text-left ">
          {/* Project Overview */}
          <br />
          {/* Blog & Content System */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38]"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Blog & Content System
          </span>
          <br />
          <br />
          On the Blog page, I added full support for displaying Shopify-managed
          blog posts. The goal was to allow administrators to write content
          directly inside Shopify, which would then dynamically appear on the
          website without any manual deployment or changes in the codebase.
          <br />
          <br />
          {/* Shop & Product Integration */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38]"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Shop & Product Integration
          </span>
          <br />
          <br />
          The Shop page required implementing product connections via GraphQL,
          including title, images, description, long description, price, and
          variants. I also added the shopping cart logic, enabling users to add,
          remove, and manage items while ensuring that all product data stays
          synced with Shopify.
          <br />
          <br />
          {/* UI Pages (Home & About) */}
          <span
            className="uppercase text-xl font-semibold px-4 py-2 rounded-lg bg-[#F46C38]"
            style={{ textShadow: "0px 0px 4px rgba(0,0,1)" }}
          >
            Home & About Pages
          </span>
          <br />
          <br />
          The Home page included a carousel, FAQ section, featured products, and
          additional content blocks. The About page required creating a clean,
          minimalistic design aligned with the Pure Aqua branding. Both pages
          were built with reusable, typed components for maintainability.
          {/* Tech Stack */}
          <br />
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
          {/* Retrospective */}
          The project uses{" "}
          <span className="font-semibold text-orange-400">
            Next.js
          </span> and{" "}
          <span className="font-semibold text-orange-400">TypeScript</span> for
          a fully typed, SEO-optimized frontend.{" "}
          <span className="font-semibold text-orange-400">Tailwind CSS</span>{" "}
          was used for fast and responsive styling, while{" "}
          <span className="font-semibold text-orange-400">GraphQL</span> handled
          all data requests to{" "}
          <span className="font-semibold text-orange-400">Shopify</span> as the
          headless CMS powering products, blog posts, and store information.
          <br />
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
        </div>
      </div>
    ),
  },
  {
    id: 6,
    name: "Hora Hub Website",
    description: `HoraHub is a Web3 platform within the Hora Games ecosystem, designed for managing and exchanging cryptocurrency, NFTs, and player rewards across multiple Hora products. As my first project at Hora Games, it introduced me to the ecosystem and gave me the opportunity to work on real, production-level Web3 interfaces.`,
    image: horahub,
    languages: [
      {
        label: "React.js",
        img: react,
        height: 20,
      },
      {
        label: "Tailwind CSS",
        img: tailwind,
        height: 16,
      },
      {
        label: "React Context",
        img: null,
        height: 20,
      },
    ],
    isAvailable: false,
    link: "",
    floatAnimTime: 400,
    customComponent: (
      <div>
        <div className="text-white text-md font-light   sm:px-[56px] md:px-20 text-center sm:text-left ">
          <br />
          My main task was to implement the new Quests and Swaps sections. This
          included building the UI from provided designs, structuring all
          elements in responsive grids, adding sorting functionality, and
          creating detailed single pages for each item. I also worked on
          improving existing components across the platform, fixing various
          visual inconsistencies and layout issues.
          <br />
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
          For the frontend, the project uses
          <span className="font-semibold text-orange-400"> React.js</span> with
          <span className="font-semibold text-orange-400">
            {" "}
            Tailwind CSS
          </span>{" "}
          for styling, while global state and shared logic are handled through
          <span className="font-semibold text-orange-400"> React Context</span>.
          <br />
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
        </div>
      </div>
    ),
  },
  {
    id: 7,
    name: "Horaverse Website",
    description: `Horaverse is a Web3 ecosystem connecting games, tokens, and NFTs within a unified economy for both players and collectors. It serves as a hub where users can explore assets, track progress, and engage with multiple products from the Hora Games universe in a seamless experience.`,
    image: horaverse,
    languages: [
      {
        label: "Astro.js",
        img: astro,
        height: 20,
      },
      {
        label: "Tailwind CSS",
        img: tailwind,
        height: 16,
      },
    ],
    isAvailable: false,
    link: "",
    floatAnimTime: 400,
    customComponent: (
      <div>
        <div className="text-white text-md font-light  sm:px-20 text-center sm:text-left ">
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
          This project was relatively lightweight and static, focusing on
          delivering clean, responsive pages. It was built using
          <span className="font-semibold text-orange-400"> Astro.js</span> for
          fast, modern static site generation, combined with
          <span className="font-semibold text-orange-400">
            {" "}
            Tailwind CSS
          </span>{" "}
          for styling.
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
        </div>
      </div>
    ),
  },
  {
    id: 8,
    name: "Open Gaming Website",
    description: `OpenGaming is a Web3 platform that enables players and developers to distribute and utilize tokens across various games and ecosystems. It serves as a hub for token management and interaction within a multi-game environment.`,
    image: opengamingweb,
    languages: [
      {
        label: "Astro.js",
        img: astro,
        height: 20,
      },
      {
        label: "Tailwind CSS",
        img: tailwind,
        height: 16,
      },
    ],
    isAvailable: true,
    link: "https://opengaming.network",
    floatAnimTime: 400,
    customComponent: (
      <div>
        <div className="text-white text-md font-light  sm:px-[56px] md:px-20 text-center sm:text-left ">
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
          The project is a static, responsive single-page website, built using
          <span className="font-semibold text-orange-400"> Astro.js </span>
          combined with{" "}
          <span className="font-semibold text-orange-400">Tailwind CSS </span>
          for styling.
          <br />
          <div className="w-full h-[0.1px] bg-white/20 my-4" />
        </div>
      </div>
    ),
  },
];
