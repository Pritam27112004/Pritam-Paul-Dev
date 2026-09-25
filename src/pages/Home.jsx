import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Publications from "../components/Publications";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Events from "../components/Events";
import Talks from "../components/Talks";
import Leadership from "../components/Leadership";
import CommunityService from "../components/CommunityService";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Courses from "../components/Courses";
import Books from "../components/Books";
import Skills from "../components/Skills";
function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full max-w-[900px] mx-auto px-[14px]">
        <Hero />
        <Skills/>
        <Education />
        <Experience />
        <Projects />
        <Publications />
        <Certifications />
        <Courses />
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