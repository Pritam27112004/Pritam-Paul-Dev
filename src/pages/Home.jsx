import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import News from "../components/News";
import Publications from "../components/Publications";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Events from "../components/Events";
import Talks from "../components/Talks";
import Leadership from "../components/Leadership";
import CommunityService from "../components/CommunityService";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Hero />
        <News />
        <Publications />
        <Projects />
        <Experience />
        <Achievements />
        <Events />
        <Talks />
        <Leadership />
        <CommunityService />
        <Footer />
      </main>
    </>
  );
}

export default Home;