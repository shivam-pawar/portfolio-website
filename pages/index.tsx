import { LetMeDown } from "let-me-down";
import type { NextPage } from "next";
import Footer from "../components/Footer/Footer";
import LandingText from "../components/LandingText/landingText";
const Home: NextPage = () => {
  return (
    <>
      <LetMeDown footerComponent={<Footer />}>
        <LandingText />
      </LetMeDown>
    </>
  );
};

export default Home;
