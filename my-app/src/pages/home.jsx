import styled from "styled-components";
import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import About from "../components/about";
import PartnerSection from "../components/partnerSection";
import Features from "../components/features";
import Roadmap from "../components/roadmap";
import Footer from "../components/footer";

const Home = () => {
  return (
    <MainContent>
      <Navbar />
      <HeroSection />
      <PartnerSection/>
      <About />
      <Features/>
      <Roadmap/>
      <Footer/>
    </MainContent>
  );
};

const MainContent = styled.div`
  flex: 1;
  display: flex;
  width: 94.5vw;
  height: auto;
  overflow: auto;
  flex-direction: column;
  background: linear-gradient(
    to right bottom,
    var(--gradient-home2) 40%,
    var(--gradient-home1),
    var(--gradient-home3)
  );
`;

export default Home;
