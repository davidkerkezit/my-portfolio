import tw from "twin.macro";
import { Nav } from "./components/Nav";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Workplaces from "./components/Workplaces";
import Contact from "./components/Contact";
import About from "./components/About";

const Container = tw.div`bg-primary`;
const ContentContainer = tw.div`w-full flex flex-col`;

function App() {
  return (
    <Container>
      {/* <div className="w-full bg-green-500 h-20 relative mt-4">
        <Nav />
      </div> */}
      <ContentContainer>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Workplaces />
        <Contact />
      </ContentContainer>
    </Container>
  );
}

export default App;
