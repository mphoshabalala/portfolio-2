import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";

function Homepage() {
  return (
    <>
      <ScrollToTop />
      <div className="overflow-x-hidden font-lato App">
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
