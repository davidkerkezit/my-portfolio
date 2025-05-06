import tw from "twin.macro";
import { Nav } from "./components/Nav";
import PersonCard from "./components/PersonCard";
import ScrollableContent from "./components/ScrollableContent";

const Container = tw.div`bg-[#151412] h-[100dvh] pt-8`;
const ContentContainer = tw.div` w-full h-full mt-24 flex`;

function App() {
  return (
    <Container>
      <Nav />
      <ContentContainer>
        <PersonCard />
        <ScrollableContent />
      </ContentContainer>
    </Container>
  );
}

export default App;
