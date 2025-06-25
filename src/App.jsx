import tw from "twin.macro";
import { Nav } from "./components/Nav";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Workplaces from "./components/Workplaces";
import Contact from "./components/Contact";
import About from "./components/About";
import { useRef } from "react";

const Container = tw.div`bg-primary overflow-x-hidden  border-orange-500 sm:border-red-500  md:border-green-500 lg:border-yellow-500 xl:border-black 2xl:border-purple-500 `;
const ContentContainer = tw.div`w-full flex flex-col `;

function App() {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const experienceRef = useRef();
  const contactRef = useRef();
  return (
    <Container>
      <div className="w-full bg-green-500  relative ">
        <Nav
          refs={{ aboutRef, skillsRef, projectsRef, experienceRef, contactRef }}
        />
      </div>
      <ContentContainer>
        <Header contactRef={contactRef} aboutRef={aboutRef} />
        <About />
        <Skills skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
        <Workplaces experienceRef={experienceRef} />
        <Contact contactRef={contactRef} />
      </ContentContainer>
    </Container>
  );
}

export default App;
