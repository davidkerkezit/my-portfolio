import tw from "twin.macro";
import { Nav } from "./components/Nav";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Workplaces from "./components/Workplaces";
import Skills from "./components/Skills";

const Container = tw.div`bg-[#151412]`;
const ContentContainer = tw.div` w-full h-full mt-0 flex flex-col`;

function App() {
  return (
    <Container>
      {/* <div className="w-full bg-green-500 h-20 relative mt-4">
        <Nav />
      </div> */}
      <ContentContainer>
        <Header />
        <Skills />
        <Projects />
        <Workplaces />
      </ContentContainer>
    </Container>
  );
}

export default App;
