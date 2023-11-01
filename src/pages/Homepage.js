import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function Homepage() {
  return (
    <div className=" font-lato App">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default Homepage;
